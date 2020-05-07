const countries = (
  state = {
    current: [],
    history: { fullName: {}, shortName: {}, code: {}, currency: {} }
  },
  action
) => {
  if (action.type === 'SET_CURRENT_COUNTRY') {
    if (action.saveToHistoryQuery) {
      const newHistoryBySelector = {
        ...state.history[action.selector],
        [action.saveToHistoryQuery]: action.payload
      };
      return {
        current: action.payload,
        history: {
          ...state.history,
          [action.selector]: newHistoryBySelector
        }
      };
    } else {
      return { ...state, current: action.payload };
    }
  }
  return state;
};

export default countries;
