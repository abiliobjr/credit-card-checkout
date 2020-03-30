import { connect } from "react-redux";

import View from './view';

const mapStateToProps = state => ({ 
  creditCardForm: state.creditCardForm,
})

const PaymentPage = connect(mapStateToProps, null)(View);

export default PaymentPage;