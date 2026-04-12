
  export const offersTime = (now: number , end: number) => {

    const remaining = end - now;

    const days = Math.floor(remaining / 86400);
    const hours = Math.floor((remaining % 86400) / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;

    const pad = (n: number) => String(n).padStart(2, "0");

        return {d: days, h: pad(hours), m: pad(minutes), s: pad(seconds)};

  };