import { onCleanup, onMount } from "solid-js";
import * as d3 from "d3";
import worldData from "../lib/world.json";

const GlobeComponent = () => {
  let mapContainer: HTMLDivElement | undefined;

  const visitedCountries = [
    "Germany",
    "China",
    "Taiwan",
    "Japan",
    "South Korea",
    "Belgium",
    "Netherlands",
    "Thailand",
    "Malaysia",
    "Singapore",
    "Turkey",
    "France",
  ];

  onMount(() => {
    if (!mapContainer) return;

    const measure = () => {
      const rect = mapContainer!.getBoundingClientRect();
      // Fall back to a sensible default if the container is still 0×0 at mount
      // (e.g. parent flex/grid hasn't laid out yet).
      const w = rect.width || mapContainer!.clientWidth || 300;
      const h = rect.height || mapContainer!.clientHeight || w;
      return { width: Math.max(w, 80), height: Math.max(h, 80) };
    };

    const { width, height } = measure();
    const isMobile = window.innerWidth <= 768;
    const sensitivity = isMobile ? 100 : 75;
    const scale = Math.min(width, height) * 0.45;

    let projection = d3
      .geoOrthographic()
      .scale(scale)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    let pathGenerator = d3.geoPath().projection(projection);

    // Clear any existing content
    d3.select(mapContainer).selectAll("*").remove();

    let svg = d3
      .select(mapContainer)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background", "transparent");

    // Add gradient definitions
    const defs = svg.append("defs");
    
    // Gradient for the globe background
    const globeGradient = defs.append("radialGradient")
      .attr("id", "globe-gradient")
      .attr("cx", "0.3")
      .attr("cy", "0.3");
    
    globeGradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#1a1a1a")
      .attr("stop-opacity", 0.1);
      
    globeGradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#0a0a0a")
      .attr("stop-opacity", 0.3);

    // Gradient for visited countries
    const visitedGradient = defs.append("linearGradient")
      .attr("id", "visited-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%");
      
    visitedGradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#FF6B35");
      
    visitedGradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#E55A2B");

    // Add outer glow effect
    const glowFilter = defs.append("filter")
      .attr("id", "glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");
    
    glowFilter.append("feDropShadow")
      .attr("dx", 0)
      .attr("dy", 0)
      .attr("stdDeviation", 8)
      .attr("flood-color", "#FF6B35")
      .attr("flood-opacity", 0.3);

    // Globe background circle
    svg
      .append("circle")
      .attr("fill", "url(#globe-gradient)")
      .attr("stroke", "#FF6B35")
      .attr("stroke-width", "1")
      .attr("stroke-opacity", 0.3)
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", initialScale)
      .attr("filter", "url(#glow)");

    let map = svg.append("g");

    map
      .append("g")
      .attr("class", "countries")
      .selectAll("path")
      .data(worldData.features)
      .enter()
      .append("path")
      .attr("d", (d: any) => pathGenerator(d as any))
      .attr("fill", (d: { properties: { name: string } }) =>
        visitedCountries.includes(d.properties.name) ? "url(#visited-gradient)" : "rgba(255, 255, 255, 0.1)"
      )
      .style("stroke", (d: { properties: { name: string } }) =>
        visitedCountries.includes(d.properties.name) ? "#FF6B35" : "rgba(255, 255, 255, 0.2)"
      )
      .style("stroke-width", (d: { properties: { name: string } }) =>
        visitedCountries.includes(d.properties.name) ? 0.8 : 0.3
      )
      .style("opacity", (d: { properties: { name: string } }) =>
        visitedCountries.includes(d.properties.name) ? 0.9 : 0.4
      )
      .style("transition", "all 0.3s ease")
      .on("mouseover", function(event, d: any) {
        if (visitedCountries.includes(d.properties.name)) {
          d3.select(this)
            .style("opacity", 1)
            .style("stroke-width", 1.2)
            .style("filter", "brightness(1.2)");
        }
      })
      .on("mouseout", function(event, d: any) {
        if (visitedCountries.includes(d.properties.name)) {
          d3.select(this)
            .style("opacity", 0.9)
            .style("stroke-width", 0.8)
            .style("filter", "brightness(1)");
        }
      });

    // Slower, smoother rotation
    const timer = d3.timer(() => {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      projection.rotate([rotate[0] - 0.5 * k, rotate[1]]);
      svg.selectAll("path").attr("d", (d: any) => pathGenerator(d as any));
    }, 100);

    const applySize = (w: number, h: number) => {
      const newScale = Math.min(w, h) * 0.45;
      projection.scale(newScale).translate([w / 2, h / 2]);
      svg.attr("width", w).attr("height", h);
      svg.select("circle")
        .attr("cx", w / 2)
        .attr("cy", h / 2)
        .attr("r", newScale);
      svg.selectAll("path").attr("d", (d: any) => pathGenerator(d as any));
    };

    // Re-size when the container itself changes (covers card resize, not just window resize).
    const ro = new ResizeObserver(() => {
      const { width: nw, height: nh } = measure();
      applySize(nw, nh);
    });
    ro.observe(mapContainer);

    onCleanup(() => {
      timer.stop();
      ro.disconnect();
    });
  });

  return (
    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
      <div style="width: 100%; height: 100%;" ref={mapContainer}></div>
    </div>
  );
};

export default GlobeComponent;
