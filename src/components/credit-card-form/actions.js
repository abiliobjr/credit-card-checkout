// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";

import { closeSelect } from '../../utils';

export const nameInputChange = (dispatch) => (event) => {
    const value = event.target.value;
    dispatch({
        type: 'CHANGE_NAME_INPUT',
        payload: value
    })
}

export const cardNumberInputChange = (dispatch) => (event) => {
    const value = event.target.value;
    dispatch({
        type: 'CHANGE_CARD_NUMBER_INPUT',
        payload: value
    })
}

export const validityInputChange = (dispatch) => (event) => {
    const value = event.target.value;
    dispatch({
        type: 'CHANGE_VALIDITY_INPUT',
        payload: value
    })
}

export const cvvInputChange = (dispatch) => (event) => {
    const value = event.target.value;
    dispatch({
        type: 'CHANGE_CVV_INPUT',
        payload: value
    })
}

export const selectInstallment = (dispatch) => (event) => {
    const value = event.target.dataset.numberofinstallment;
    closeSelect();
    dispatch({
        type: 'SELECT_INSTALLMENT_NUMBER',
        payload: value
    })
}

export const getInputOnFocus = (dispatch) => (event) => {
    const name = event.target.name;
    dispatch({
        type: 'GET_INPUT_ON_FOCUS',
        payload: name
    })
}

export const getInstallments = (dispatch) => {
    dispatch({
        type: 'LOADED_INSTALLMENT_DATA',
        payload: [
            { number: 1, text: "1x Sem juros!" },
            { number: 2, text: "2x Sem juros!" },
            { number: 3, text: "3x Sem juros!" },
            { number: 4, text: "4x Sem juros!" },
            { number: 5, text: "5x Sem juros!" },
            { number: 6, text: "6x Sem juros!" },
        ]
    })
}


// export const getInstallments = (dispatch) => {
//     /* Fazendo mock da resposta */
//     const mock = new MockAdapter(axios);
//     mock.onGet("/installments").reply(200, {
//         users: [
//             { number: 1, text: "1x Sem juros!" },
//             { number: 2, text: "2x Sem juros!" },
//             { number: 3, text: "3x Sem juros!" },
//             { number: 4, text: "4x Sem juros!" },
//             { number: 5, text: "5x Sem juros!" },
//             { number: 6, text: "6x Sem juros!" },
//         ]
//     });
//     /* Fazendo mock da resposta */
//     axios.get('/installments')
//         .then(response => {
//             console.log(response.data)
//             dispatch({
//                 type: 'LOADED_INSTALLMENT_DATA',
//                 payload: response.data
//             })
//         })
//         .catch(error => {
//             console.error(error)
//             dispatch({
//                 type: 'FAILED_TO_LOAD_INSTALLMENT_DATA',
//                 payload: 'Falha ao carregar os dados de parcela'
//             })
//         })
// }