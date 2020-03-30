import React, { Component } from 'react';

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
        <form action="#">
            <div className="material-form-field">
                <input type="text" required name="number" className="field-text" onChange={this.props.cardNumberInputChange} value={cardNumber}/>
                <label className="material-form-field-label" for="field-text" >Número do cartão</label>
            </div>
            <div className="material-form-field">
                <input type="text" required name="name" className="field-text" onChange={this.props.nameInputChange} value={name}/>
                <label className="material-form-field-label" for="field-text">Nome (igual do cartão)</label>
            </div>
            <div className="flex-container space-between">
                <div className="material-form-field half">
                    <input type="text" required name="expiry" className="field-text" onChange={this.props.validityInputChange} value={validity} />
                    <label className="material-form-field-label" for="field-text">Validade</label>
                </div>
                <div className="material-form-field half">
                    <input type="text" required name="cvc" className="field-text" onChange={this.props.cvvInputChange} value={cvv} />
                    <label className="material-form-field-label" for="field-text">CVV</label>
                </div>
            </div>
            <div className="material-form-field">
                {
                    selectedInstallment &&
                    <React.Fragment>
                        <input type="text" required name="dropDown" name="installment" id="field-dropDown" value={selectedInstallment.text} onChange={() =>''}/>
                        <label className="material-form-field-label" for="field-dropDown">Número de parcelas</label>
                        <ul className="material-dropdown">
                            {
                                installments.map(installment => {
                                    return (
                                        <li
                                            data-numberofinstallment={installment.number}
                                            key={'installment'+installment.number}
                                            className={`
                                                ${selectedInstallment == installment.number ? 'material-dropdown-selected' : ''}
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
            <button>Continuar</button>
        </form>
    )}
}

export default CreditCardForm;