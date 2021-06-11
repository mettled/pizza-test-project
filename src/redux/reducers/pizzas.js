const initialState = {
  items: [],
};

const reducer = (state = initialState, { type, payload }) => {
  console.log('state', state, payload);
  switch (type) {
    case 'SET_PIZZAS':
      return { items: [...state.items, ...payload] };
    case 'DELETE_PIZZA':
      return state?.items.filter((name) => name !== payload?.name);
    default:
      return state;
  }
};

export default reducer;
