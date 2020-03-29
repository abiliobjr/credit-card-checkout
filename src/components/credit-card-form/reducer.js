const INITIAL_STATE = {
    cardNumber: '5149 4505 6231 6542',
    name: 'Abilio Junior',
    validity: '20/20',
    cvv: '123',
    installments: 0
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_NAME_INPUT':
            return {
                ...state,
                cardNumber: action.payload
            }
        default:
            return state
    }
}