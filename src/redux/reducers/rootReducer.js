import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Cart from './Cart';
import Products from './Products';
import Users from './Users';

const persistConfig = {
    key : 'root',
    storage,
    // whitelist : ['cart']
}

const rootReducer = combineReducers({
    Cart,
    Products,
    Users
});

export default persistReducer(persistConfig, rootReducer);