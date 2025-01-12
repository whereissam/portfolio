export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInGermany(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert UTC to German time (UTC+1/UTC+2 depending on DST)
  // The browser's built-in Date handling will automatically manage DST transitions
  return now;
}

export function formatTimeForGermany(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // German time typically uses 24-hour format
    timeZone: "Europe/Berlin"
  };

  // Using German locale for proper formatting
  let formattedTime = new Intl.DateTimeFormat("de-DE", options).format(date);

  // Add timezone - Germany uses MEZ (Mitteleuropäische Zeit) or MESZ during summer
  const isDST = isDaylightSavingTime(date);
  // Add timezone - CET (Central European Time) or CEST (Central European Summer Time)
  formattedTime += isDST ? " CEST" : " CET";

  return formattedTime;
}

export function formatDate(date: Date): string {
  // German date format: DD.MM.YYYY
  return date.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

// Helper function to determine if a date is in DST
function isDaylightSavingTime(date: Date): boolean {
  const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
  const current = date.getTimezoneOffset();
  return jan !== current;
}