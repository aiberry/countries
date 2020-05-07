const searchQuery = (state = '', action) => {
  if (action.type === 'SET_SEARCH_QUERY') {
    return action.payload;
  }
  return state;
};

export default searchQuery;
