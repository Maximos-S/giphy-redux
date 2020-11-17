import React from 'react';
// import App from './App';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';

const Root = ({store}) => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default Root;
