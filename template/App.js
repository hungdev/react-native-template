import 'react-native-gesture-handler';
import React, { Component } from 'react';
//Redux
import { Provider } from 'react-redux';
import { store } from './src/config/store';

import AppContainer from 'navigation/AppContainer';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import './src/i18n'

let persistor = persistStore(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
