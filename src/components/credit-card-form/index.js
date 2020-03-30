import { connect } from "react-redux";

import View from './view';

import {
  nameInputChange,
  cardNumberInputChange,
  validityInputChange,
  cvvInputChange,
  getInstallments,
  selectInstallment,
  getInputOnFocus
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
  selectInstallment: selectInstallment(dispatch),
  getInputOnFocus: getInputOnFocus(dispatch)
})

const CreditCardForm = connect(mapStateToProps, mapDispatchToProps)(View);

export default CreditCardForm;