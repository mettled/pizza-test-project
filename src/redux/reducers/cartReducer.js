const initialState = {
  pizzasType: {},
  pizzasCount: {},
  totalCartPrice: 0,
  totalCartCount: 0,
};

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_ONE_TO_CART': {
      const { id, price, size, type } = payload;
      const pizzaKey = `${id}, ${size}, ${type}`;
      const newPizzaType = state.pizzasType[pizzaKey] ? state.pizzasType[pizzaKey] + 1 : 1;
      const newPizzasCount = state.pizzasCount[id] ? state.pizzasCount[id] + 1 : 1;

      return {
        ...state,
        pizzasType: {
          ...state.pizzasType,
          [pizzaKey]: newPizzaType,
        },
        pizzasCount: {
          ...state.pizzasCount,
          [id]: newPizzasCount,
        },
        totalCartPrice: state.totalCartPrice + price,
        totalCartCount: state.totalCartCount + 1,
      };
    }
    case 'DELETE_PiZZA_FROM_CART': {
      const { priceInCart, price, count } = payload;
      const [id] = priceInCart.split(', ');
      const newPizzaType = Object.fromEntries(
        Object.entries(state.pizzasType).filter(([type]) => type !== priceInCart),
      );

      const newPizzaCount = Object.fromEntries(
        Object.entries(state.pizzasCount).filter(([type]) => type !== id),
      );

      return {
        ...state,
        pizzasType: {
          ...newPizzaType,
        },
        pizzasCount: {
          ...newPizzaCount,
        },
        totalCartPrice: state.totalCartPrice - price * count,
        totalCartCount: state.totalCartCount - count,
      };
    }

    case 'DELETE_ALL_PIZZAS_FROM_CART': {
      return {
        ...state,
        pizzasType: {},
        pizzasCount: {},
        totalCartPrice: 0,
        totalCartCount: 0,
      };
    }

    case 'REMOVE_ONE_FROM_CART': {
      const { priceInCart, price } = payload;
      const [id] = priceInCart.split(', ');
      const newTotalCartCount =
        state.pizzasType[priceInCart] > 0 && state.totalCartCount > 0
          ? state.totalCartCount - 1
          : state.totalCartCount;
      const newTotalCartPrice =
        state.pizzasCount[id] > 0 && state.totalCartPrice > 0
          ? state.totalCartPrice - price
          : state.totalCartPrice;
      const newPizzaTypeCount =
        state.pizzasType[priceInCart] > 0
          ? state.pizzasType[priceInCart] - 1
          : state.pizzasType[priceInCart];
      const newPizzaCount =
        state.pizzasCount[id] > 0 ? state.pizzasCount[id] - 1 : state.pizzasCount[id];
      return {
        ...state,
        pizzasType: {
          ...state.pizzasType,
          [priceInCart]: newPizzaTypeCount,
        },
        pizzasCount: {
          ...state.pizzasCount,
          [id]: newPizzaCount,
        },
        totalCartPrice: newTotalCartPrice,
        totalCartCount: newTotalCartCount,
      };
    }
    default:
      return state;
  }
};

export default cart;
