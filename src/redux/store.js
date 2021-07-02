import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import pizzas from './reducers/pizzasReducer';
import cart from './reducers/cartReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    pizzas,
    cart,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
