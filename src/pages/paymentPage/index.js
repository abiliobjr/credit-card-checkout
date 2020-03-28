import React, { Component } from 'react';


class PaymentPage extends Component {

    render(){
        return (
            <div className="container">
                <div className="flex-container content-box" id="payment">
                    <div className="payment-method-box">
                        <h1>metodo de pagamento</h1>
                    </div>
                    <div className="payment-form">
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