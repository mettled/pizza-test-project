const initialState = {
  sortingBy: 'popular',
  category: 0,
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortingBy: action.payload,
    };
  }
  return state;
};

export default filters;
