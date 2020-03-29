import React from 'react';

const CreditCardForm = (props) => {
    const { cardNumber, name, validity, cvv, installments } = props.creditCardForm;
    return (
        <form action="#">
            <div className="material-form-field">
                <input type="text" required name="text" id="field-text" onChange={props.cardNumberInputChange} value={cardNumber}/>
                <label className="material-form-field-label" for="field-text" >Número do cartão</label>
            </div>
            <div className="material-form-field">
                <input type="text" required name="text" id="field-text" onChange={props.nameInputChange} value={name}/>
                <label className="material-form-field-label" for="field-text">Nome (igual do cartão)</label>
            </div>
            <div className="flex-container space-between">
                <div className="material-form-field half">
                    <input type="text" required name="text" id="field-text" onChange={props.validityInputChange} value={validity} />
                    <label className="material-form-field-label" for="field-text">Validade</label>
                </div>
                <div className="material-form-field half">
                    <input type="text" required name="text" id="field-text" onChange={props.cvvInputChange} value={cvv} />
                    <label className="material-form-field-label" for="field-text">CVV</label>
                </div>
            </div>
            <div className="material-form-field">
                <input type="text" required name="dropDown" name="installment" id="field-dropDown"  />
                <label className="material-form-field-label" for="field-dropDown">Drop down</label>
                <ul className="material-dropdown">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li className="material-dropdown-selected">Item 3 selected</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                </ul>
            </div>
            <button>Continuar</button>
        </form>
    )
}

export default CreditCardForm;