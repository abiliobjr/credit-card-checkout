import { connect } from "react-redux";

import View from './view';

import {
  nameInputChange,
  cardNumberInputChange,
  validityInputChange,
  cvvInputChange,
  getInstallments,
  selectInstallment
} from './actions';

const mapStateToProps = state => ({ 
  creditCardForm: state.creditCardForm,
})

const mapDispatchToProps = dispatch => ({
  nameInputChange: nameInputChange(dispatch),
  cardNumberInputChange: cardNumberInputChange(dispatch),
  validityInputChange: validityInputChange(dispatch),
  cvvInputChange: cvvInputChange(dispatch),
  getInstallments: () => getInstallments(dispatch),
  selectInstallment: selectInstallment(dispatch)
})

const CreditCardForm = connect(mapStateToProps, mapDispatchToProps)(View);

export default CreditCardForm;