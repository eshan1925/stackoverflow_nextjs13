import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now: number = Date.now();
  const createdAtTimestamp: number = createdAt.getTime();

  const diff: number = Math.abs(now - createdAtTimestamp);

  const seconds: number = Math.floor(diff / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);
  const weeks: number = Math.floor(days / 7);
  const months: number = Math.floor(days / 30);
  const years: number = Math.floor(days / 365);

  if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }
};

export const formatAndDivideNumber = (num: number): string => {
  if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
  } else {
      return num.toString();
  }
};

export const getJoinedDate = (date: Date): string => {
    // Extract the month and year from the Date object
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    // Create the joined date string (e.g., "September 2023")
    const joinedDate = `${month} ${year}`;
  
    return joinedDate;
  }


