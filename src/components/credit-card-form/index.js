import { connect } from "react-redux";

import View from './view';

import {
  nameInputChange,
  cardNumberInputChange,
  validityInputChange,
  cvvInputChange,
  getInstallments,
  selectInstallment,
  getInputOnFocus,
  payWithCreditCard
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
  getInputOnFocus: getInputOnFocus(dispatch),
  dispatchPayWithCreditCard: payWithCreditCard(payWithCreditCard)
  
})


const mergeProps = (propsFromState, propsFromDispatch) => {
  const { dispatchPayWithCreditCard } = propsFromDispatch;
  const { creditCardForm} = propsFromState;
  return {
      ...propsFromState,
      ...propsFromDispatch,
      payWithCreditCard: dispatchPayWithCreditCard(creditCardForm)
  };
};


const CreditCardForm = connect(mapStateToProps, mapDispatchToProps, mergeProps)(View);

export default CreditCardForm;