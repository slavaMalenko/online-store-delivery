import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import filters from './redusers/filters';
import pizzas from './redusers/pizzas';
import cart from './redusers/cart';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const redusers = combineReducers({
    filters,
    pizzas,
    cart,
})

const store = createStore(
    redusers,
    composeEnhancer(applyMiddleware(thunk)),
);

window.store = store;

export default store;