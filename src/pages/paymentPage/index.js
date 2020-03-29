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
                        <h1>Form</h1>
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