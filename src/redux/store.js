import { createStore, combineReducers } from 'redux';

import filtersReducer from './redusers/filters';
import pizzasReducer from './redusers/pizzas';


const redusers = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
})

const store = createStore(
    redusers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;