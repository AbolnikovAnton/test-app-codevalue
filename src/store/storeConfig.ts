import {legacy_createStore as createStore} from '@reduxjs/toolkit'
import {composeWithDevTools} from 'redux-devtools-extension'
import {initialState, rootReducer} from '../reducers/rootReducer'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//@ts-ignore
export const store = createStore(persistedReducer, initialState, composeWithDevTools());

export const persistor = persistStore(store)