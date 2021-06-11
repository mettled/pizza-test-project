import { createStore, combineReducers } from 'redux';
import pizzasReducer from './reducers/pizzas';
import filterReducer from './reducers/filters';

const store = createStore(
  combineReducers({
    pizzas: pizzasReducer,
    filters: filterReducer,
  }),

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;
export default store;
