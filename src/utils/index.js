export const getSelectedInstallment = (array, selectedInstallment) => {
    const selected = array.filter(x => x.number === selectedInstallment)
    return selected[0];
}