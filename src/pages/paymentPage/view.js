import React, { Component, Fragment } from 'react';
import Cards from 'react-credit-cards';

import back from '../../images/back.svg';
import CreditCard from '../../images/credit-card.svg';

import Steps from '../../components/steps';
import CreditCardForm from '../../components/credit-card-form'

import { isMobile } from '../../utils';
class PaymentPage extends Component {
    render(){
        return (
            <div className="container flex-container">
                <div className="flex-container content-box" id="payment">
                    <div className="payment-method-box">
                        <div className="change-payment-method-box">
                            <a href="#change-payment">
                                <img src={back} alt=""/>
                                {
                                    isMobile() ?
                                        <Fragment><span>Etapa 2</span> de  3</Fragment>:
                                        'Alterar forma de pagamento'
                                }
                            </a>
                        </div>
                        <div className="flex-container title">
                            <img src={CreditCard} alt=""/>
                            <h1>Adicione um novo cartão de crédito</h1>
                        </div>
                        <Cards
                            cvc={this.props.creditCardForm.cvv}
                            expiry={this.props.creditCardForm.validity}
                            focused={this.props.creditCardForm.inputOnFocus}
                            name={this.props.creditCardForm.name}
                            number={this.props.creditCardForm.cardNumber}
                        />
                    </div>
                    <div className="payment-form">
                        {
                            !isMobile() &&
                                <Steps />
                        }
                        <CreditCardForm />
                    </div>
                </div>
                {
                    !isMobile() &&
                        <div id="carrinho">
                            <h1>carrinho</h1>
                        </div>    
                }
                
            </div>
        )
    }
}

export default PaymentPage;