
  export const offersTime = (now: number, start: number, end: number) => {
    if (now < start) return "Not started";
    if (now >= end) return "Expired";

    const remaining = end - now;

    const days = Math.floor(remaining / 86400);
    const hours = Math.floor((remaining % 86400) / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;

    const pad = (n: number) => String(n).padStart(2, "0");

    return `${days}d : ${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;
  };