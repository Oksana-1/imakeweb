export const scrollTo = targetBlock => {
    const offsetTop = targetBlock.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
};

export const exist = element => {
    return (typeof element === 'undefined' || element === null)
        ? false
        : element.length !== 0;
};

export const isScrolledIntoView = element => {
    const rect = element.getBoundingClientRect();
    const elemViewportTop = rect.top;
    const elemViewportBottom = rect.bottom;
    const viewportHeight = window.innerHeight;
    // Only completely visible elements return true:
    //return elemViewportTop >= 0 && elemViewportBottom <= viewportHeight;
    // Partially visible elements return true:
    return elemViewportTop <= viewportHeight && elemViewportBottom >= 0;
};