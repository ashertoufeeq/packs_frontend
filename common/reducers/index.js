import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {auth} from './auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  user: auth,
});

const newReducer = persistReducer(persistConfig, reducers);

export const store = createStore(newReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
