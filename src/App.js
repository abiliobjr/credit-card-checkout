import React, { Fragment} from 'react';

import Header from './components/header';
import PaymentPage from './pages/paymentPage/';

import { isMobile } from './utils'

function App() {
  return (
    <Fragment>
      {
        !isMobile() &&
        <Header />
      }
      <PaymentPage />
    </Fragment>
  );
}

export default App;
