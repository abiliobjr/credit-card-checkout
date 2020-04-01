export const getSelectedInstallment = (array, selectedInstallment) => {
    const selected = array.filter(x => x.number === selectedInstallment)
    console.log(selected)
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


export const openSelect = () => {
    document.getElementById('drop').classList.add('open')
}

export const closeSelect = () => {
    document.getElementById('drop').classList.remove('open')
}