const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

const setCategory = (category) => ({
  type: 'SET_SORT_CATEGORY',
  payload: category,
});

export { setCategory, setSortBy };
