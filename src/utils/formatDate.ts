/**
 * Converts an ISO date string to a formatted date string like "24th Dec, 2024".
 * @param dateString - The ISO date string (e.g., "2025-01-21T16:12:35.755Z").
 * @returns The formatted date string (e.g., "21st Jan, 2025").
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }
  
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" }); // e.g., "Jan"
    const year = date.getFullYear();
  
    // Get the correct ordinal suffix for the day
    const getOrdinalSuffix = (day: number): string => {
      if (day % 10 === 1 && day !== 11) return "st";
      if (day % 10 === 2 && day !== 12) return "nd";
      if (day % 10 === 3 && day !== 13) return "rd";
      return "th";
    };
  
    const ordinalSuffix = getOrdinalSuffix(day);
  
    return `${day}${ordinalSuffix} ${month}, ${year}`;
  }
  