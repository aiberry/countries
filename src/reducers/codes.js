const codes = (state = { isOpen: true, values: [] }, action) => {
  if (action.type === 'SET_CODES_LIST') {
    return { ...state, values: action.payload };
  }
  if (action.type === 'TOGGLE_CODES_LIST') {
    return { ...state, isOpen: !state.isOpen };
  }
  return state;
};

export default codes;
