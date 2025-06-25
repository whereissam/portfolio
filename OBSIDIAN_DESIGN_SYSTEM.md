# Obsidian Design System Implementation

## Overview
Your portfolio has been successfully enhanced with the Obsidian Design System - a sophisticated dark theme design language built with Tailwind CSS. The system emphasizes pure darkness, strategic orange-red accents, and exceptional readability.

## What's Been Implemented

### 1. Core Color Palette
- **bs-black**: Pure black (#000000) and dark grays for backgrounds
- **bs-white**: High-contrast whites and grays for text
- **bs-red**: Brand orange-red (#FF4500) for accents and interactions
- **Semantic colors**: Success, warning, error, and info variants

### 2. Typography System
- **Inter font**: Primary font family for modern, readable text
- **Semantic sizing**: h1-h6, body-lg/base/sm, caption sizes
- **Enhanced contrast**: Optimized for dark backgrounds

### 3. Component Library
Updated components include:
- **Button**: Primary, secondary, ghost, outline variants
- **Card**: Default, elevated, outline, accent variants  
- **Input**: Form inputs with proper focus states
- **Alert**: Success, error, warning, info alerts
- **Badge**: Status indicators and tags

### 4. Enhanced Global Styles
- **Custom scrollbars**: Dark themed with orange hover states
- **Selection highlighting**: Orange-red selection background
- **Link hover states**: Smooth transitions to brand accent
- **Focus management**: Accessible focus rings

## Usage Examples

### Buttons
```astro
<!-- Primary button -->
<Button variant="primary">Get Started</Button>

<!-- Secondary button -->
<Button variant="secondary">Learn More</Button>

<!-- Ghost button -->
<Button variant="ghost">Cancel</Button>
```

### Cards
```astro
<!-- Default card -->
<Card variant="default" title="Card Title" body="Card description" />

<!-- Accent card with brand highlight -->
<Card variant="accent" title="Featured" body="Important content" />
```

### Utility Classes
```css
/* Pre-built component classes */
.obsidian-card
.obsidian-btn-primary
.obsidian-btn-secondary
.obsidian-input
.obsidian-alert-success
```

## Accessibility ✅
- **WCAG 2.1 AA compliant** contrast ratios
- **Focus indicators** with proper visibility
- **Semantic markup** maintained throughout
- **Screen reader friendly** color combinations

## Key Files Modified
1. `tailwind.config.js` - Extended with Obsidian color system and typography
2. `src/styles/globals.css` - Updated with dark theme and utility classes
3. `src/components/ui/button.tsx` - Enhanced with Obsidian variants
4. `src/components/ui/card.tsx` - New component with dark theme support
5. `src/components/Button.astro` - Updated with new design system
6. `src/components/Card/` - Enhanced with Obsidian styling
7. `src/layouts/BasicLayout.astro` - Updated with dark theme colors

## Color Reference
```css
/* Backgrounds */
bg-bs-black         /* Pure black */
bg-bs-black-200     /* Cards/panels */
bg-bs-black-300     /* Hover states */

/* Text */
text-bs-white-100   /* Primary text */
text-bs-white-200   /* Secondary text */
text-bs-white-300   /* Tertiary text */

/* Accent */
bg-bs-red           /* Primary actions */
text-bs-red         /* Links/highlights */
border-bs-red       /* Accents */
```

## Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Future Enhancements
- Implement `prefers-reduced-motion` media queries
- Add more complex UI patterns (data visualizations, dashboards)
- Create additional component variants
- Expand animation and transition system

Your portfolio now embodies the sophisticated, modern aesthetic of the Obsidian Design System while maintaining excellent accessibility and performance standards.