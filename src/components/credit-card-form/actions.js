export const nameInputChange = (dispatch) => event => {
    const value = event.target.value;
    console.log(value)
    dispatch({
        type: 'CHANGE_NAME_INPUT',
        payload: value
    })
}