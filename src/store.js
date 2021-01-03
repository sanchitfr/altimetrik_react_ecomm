import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './redux/reducers/rootReducer';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
    rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export default { store, persistor };