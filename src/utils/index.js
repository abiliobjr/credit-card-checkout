export const getSelectedInstallment = (array, selectedInstallment) => {
    const selected = array.filter(x => x.number === selectedInstallment)
    return selected[0];
}

export const isMobile = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}