import React, { Component } from 'react';
import Cards from 'react-credit-cards';

import Steps from '../../components/steps';
import back from '../../images/back.svg';
import CreditCard from '../../images/credit-card.svg';

class PaymentPage extends Component {
    render(){
        return (
            <div className="container flex-container">
                <div className="flex-container content-box" id="payment">
                    <div className="payment-method-box">
                        <div className="change-payment-method-box">
                            <a href="#">
                                <img src={back} alt=""/>
                                Alterar forma de pagamento
                            </a>
                        </div>
                        <div className="flex-container">
                            <img src={CreditCard} alt=""/>
                            <h1>Adicione um novo cartão de crédito</h1>
                        </div>
                        <Cards
                            cvc={123}
                            expiry={'20/20'}
                            focused={''}
                            name={'this.state.name'}
                            number={'5149 4505 6231 6542'}
                        />
                    </div>
                    <div className="payment-form">
                        <Steps />
                        <form action="#">
                            <div className="material-form-field">
                                <input type="text" required name="text" id="field-text"/>
                                <label className="material-form-field-label" for="field-text">Número do cartão</label>
                            </div>
                            <div className="material-form-field">
                                <input type="text" required name="text" id="field-text"/>
                                <label className="material-form-field-label" for="field-text">Nome (igual do cartão)</label>
                            </div>
                            <div className="flex-container space-between">
                                <div className="material-form-field half">
                                    <input type="text" required name="text" id="field-text"/>
                                    <label className="material-form-field-label" for="field-text">Validade</label>
                                </div>
                                <div className="material-form-field half">
                                    <input type="text" required name="text" id="field-text"/>
                                    <label className="material-form-field-label" for="field-text">CVV</label>
                                </div>
                            </div>
                            <div className="material-form-field">
                                <input type="text" required name="dropDown" id="field-dropDown" autoComplete="false" />
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
                    </div>
                </div>
                <div id="carrinho">
                    <h1>carrinho</h1>
                </div>
            </div>
        )
    }
}

export default PaymentPage;