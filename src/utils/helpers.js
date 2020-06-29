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
}