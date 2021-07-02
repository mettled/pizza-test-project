export const addToCart = (item) => ({
  type: 'ADD_ONE_TO_CART',
  payload: item,
});

export const deleteFromCart = (id) => ({
  type: 'DELETE_PiZZA_FROM_CART',
  payload: id,
});

export const deleteAllPizzasFromCart = (id) => ({
  type: 'DELETE_ALL_PIZZAS_FROM_CART',
  payload: id,
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_ONE_FROM_CART',
  payload: id,
});
