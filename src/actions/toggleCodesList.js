export const toggleCodesList = (current) => (dispatch) => {
  dispatch({ type: 'TOGGLE_CODES_LIST', payload: current });
};
