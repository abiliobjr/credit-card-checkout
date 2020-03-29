export const nameInputChange = (dispatch) => event => {
    const value = event.target.value;
    dispatch({
        type: 'CHANGE_NAME_INPUT',
        payload: value
    })
}

export const cardNumberInputChange = (dispatch) => event => {
    const value = event.target.value;
    dispatch({
        type: 'CHANGE_CARD_NUMBER_INPUT',
        payload: value
    })
}

export const validityInputChange = (dispatch) => event => {
    const value = event.target.value;
    dispatch({
        type: 'CHANGE_VALIDITY_INPUT',
        payload: value
    })
}

export const cvvInputChange = (dispatch) => event => {
    const value = event.target.value;
    dispatch({
        type: 'CHANGE_CVV_INPUT',
        payload: value
    })
}

