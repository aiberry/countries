export const setSearchQuery = (query) => (dispatch) => {
  dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
};
