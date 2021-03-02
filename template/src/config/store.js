import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from './logger';

import allReducers from '../reducers';

// import AppContainer from './src/appNavigation/AppContainer';
import {
  REHYDRATE,
  PURGE,
  persistCombineReducers,
  persistStore,
  persistReducer,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // persist
  // whitelist: [
  //   'accountReducer'
  // ],
  //not persist
  blacklist: [
    // 'late'
  ],
};

// let reducer = persistCombineReducers(config, allReducers)
const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, promiseMiddleware, logger),
);
