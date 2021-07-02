export const getPizzas = (items) => ({
  type: 'GET_PIZZAS',
  payload: items,
});

export const sortPizzasBy = (name) => ({
  type: 'SORT_PIZZAS_BY',
  payload: name,
});

export const sortPizzasCategory = (category) => ({
  type: 'SORT_PIZZAS_CATEGORY',
  payload: category,
});

export const fetchPizzas = (activeCategory, activeSortBy) => (dispatch) => {
  dispatch(getPizzas([]));
  const request =
    activeCategory === 0
      ? `http://localhost:3001/pizzas?_sort=${activeSortBy}&_order=desc`
      : `http://localhost:3001/pizzas?category=${activeCategory}&_sort=${activeSortBy}&_order=desc`;

  fetch(request)
    .then((data) => data.json())
    .then((data) => {
      dispatch(getPizzas(data));
    });
};
