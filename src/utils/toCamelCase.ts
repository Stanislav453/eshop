export const toCamelCase = (str: string) => {    
    return str
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .map((word, index) => {
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};
