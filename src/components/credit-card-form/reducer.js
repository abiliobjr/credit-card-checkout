import { getSelectedInstallment } from '../../utils/';

const INITIAL_STATE = {
    cardNumber: '',
    name: '',
    validity: '',
    cvv: '',
    selectedInstallment: 5,
    installments: [],
    inputOnFocus: ''
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
        case 'SELECT_INSTALLMENT_NUMBER':
            return {
                ...state,
                selectedInstallment: getSelectedInstallment(state.installments, action.payload)
            }
        case 'GET_INPUT_ON_FOCUS':
            return {
                ...state,
                inputOnFocus: action.payload
            }
        case 'LOADED_INSTALLMENT_DATA':
            return {
                ...state,
                installments: action.payload
            }
        default:
            return state
    }
}