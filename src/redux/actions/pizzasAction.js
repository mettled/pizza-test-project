const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

const fetchPizzas = () => (dispatch) => ({
  type: 'FETCH',
});

export { setPizzas, fetchPizzas };
