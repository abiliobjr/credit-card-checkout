import React, { Component } from 'react';

import ReduceMask from 'reduce-mask'

import { openSelect } from '../../utils';

class CreditCardForm extends Component {
    componentDidMount() {
        this.props.getInstallments();
        document.querySelectorAll('.field-text').forEach(item => {
            item.addEventListener('focus',this.props.getInputOnFocus)
        })
    }
    
    componentWillUnmount() {
        document.querySelectorAll('.field-text').forEach(item => {
            item.removeEventListener('focus',this.props.getInputOnFocus)
        })
      }

    render(){
        const { cardNumber, name, validity, cvv, installments, selectedInstallment } = this.props.creditCardForm;
    return (
        <form method="POST">
            <div className="material-form-field">
                <ReduceMask
                    type="number"
                    name="number"
                    className="field-text"
                    mask={['____ ____ ____ ____']}
                    onChange={this.props.cardNumberInputChange}
                    value={cardNumber}
                    required
                />
                <label className="material-form-field-label" htmlFor="field-text" >Número do cartão</label>
            </div>
            <div className="material-form-field">
                <input
                    type="text"
                    name="name"
                    className="field-text"
                    onChange={this.props.nameInputChange}
                    value={name}
                    minLength={6}
                    required
                />
                <label className="material-form-field-label" htmlFor="field-text">Nome (igual do cartão)</label>
            </div>
            <div className="flex-container space-between">
                <div className="material-form-field half">
                    <ReduceMask
                        mask={['__/__']}
                        name="expiry"
                        className="field-text"
                        onChange={this.props.validityInputChange}
                        value={validity}
                        required
                    />
                    <label className="material-form-field-label" htmlFor="field-text">Validade</label>
                </div>
                <div className="material-form-field half">
                    <ReduceMask
                        mask={['___']}
                        name="cvc"
                        className="field-text"
                        onChange={this.props.cvvInputChange}
                        value={cvv}
                        required
                    />
                    <label className="material-form-field-label" htmlFor="field-text">CVV</label>
                </div>
            </div>
            <div className="material-form-field">
                {
                    selectedInstallment &&
                    <React.Fragment>
                        <input type="text" required name="installment" id="field-dropDown" onFocus={()=> openSelect() } value={selectedInstallment.text}/>
                        <label className="material-form-field-label" htmlFor="field-dropDown">Número de parcelas</label>
                        <ul className="material-dropdown" id="drop">
                            {
                                installments.map(installment => {
                                    return (
                                        <li
                                            data-numberofinstallment={installment.number}
                                            key={'installment'+installment.number}
                                            id={installment.number}
                                            className={`
                                                ${selectedInstallment === installment.number ? 'material-dropdown-selected' : ''}
                                            `}
                                            onClick={this.props.selectInstallment}
                                        >
                                            {installment.text}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                </React.Fragment>
                }
            </div>
            <button onClick={this.props.payWithCreditCard}>Continuar</button>
        </form>
    )}
}

export default CreditCardForm;