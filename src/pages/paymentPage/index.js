import React, { Component } from 'react';
import Steps from '../../components/steps';


class PaymentPage extends Component {

    render(){
        return (
            <div className="container flex-container">
                <div className="flex-container content-box" id="payment">
                    <div className="payment-method-box">
                        <h1>metodo de pagamento</h1>
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