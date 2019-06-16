// @flow
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import ReactDOM from 'react-dom';
import Header from './components/forms/HeaderForm';
import IndexForm from './components/forms/IndexForm.jsx';

import { persistor, store } from './stores/store';

const Index = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <div>
          <Header/>
          <IndexForm/>
        </div>
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById("root"));
