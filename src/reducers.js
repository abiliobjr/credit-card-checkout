import { combineReducers, createStore } from 'redux'

import creditCardForm from './components/credit-card-form/reducer';

const rootReducer = combineReducers({
  creditCardForm
})

export default rootReducer;