const INITIAL_STATE = {
    cardNumber: '5149 4505 6231 6542',
    name: 'Abilio Junior',
    validity: '20/20',
    cvv: '123',
    installments: 0
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_NAME_INPUT':
            return {
                ...state,
                name: action.payload
            }
        case 'CHANGE_CARD_NUMBER_INPUT':
            return {
                ...state,
                cardNumber: action.payload
            }
        case 'CHANGE_VALIDITY_INPUT':
            return {
                ...state,
                validity: action.payload
            }
        case 'CHANGE_CVV_INPUT':
            return {
                ...state,
                cvv: action.payload
            }
        default:
            return state
    }
}