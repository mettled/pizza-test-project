const initialState = {
  items: [],
  sortingBy: 'rating',
  category: 0,
};

const pizzas = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_PIZZAS':
      return {
        items: [...payload],
        sortingBy: state.sortingBy,
        category: state.category,
      };
    case 'SORT_PIZZAS_BY':
      return {
        ...state,
        sortingBy: payload,
      };
    case 'SORT_PIZZAS_CATEGORY':
      return {
        ...state,
        category: payload,
      };
    default:
      return state;
  }
};

export default pizzas;
