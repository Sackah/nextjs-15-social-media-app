import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDate, formatDistanceToNowStrict } from "date-fns";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function relativeDate(from: Date) {
    const currentDate = new Date();

    // within the last 24hours
    if (currentDate.getTime() - from.getTime() < 24 * 60 * 60 * 1000) {
        return formatDistanceToNowStrict(from, { addSuffix: true });
    }

    // within the last year
    if (currentDate.getFullYear() === from.getFullYear()) {
        return formatDate(from, "MMM d");
    }

    // older than a year
    return formatDate(from, "MMM d, yyyy");
}

export function formatNumber(n: number): string {
    return Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(n);
}
