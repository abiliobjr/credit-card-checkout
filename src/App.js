import React, { Fragment} from 'react';

import Header from './components/header';

import PaymentPage from './pages/paymentPage/';

function App() {
  return (
    <Fragment>
      <Header />
      <PaymentPage />
    </Fragment>
  );
}

export default App;
