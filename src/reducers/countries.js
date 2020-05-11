const defaultState = {
  current: [],
  history: { fullName: {}, shortName: {}, code: {}, currency: {} }
};

const countries = (state = defaultState, action) => {
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
  if (action.type === 'CLEAR_CURRENT_AND_HISTORY') {
    return defaultState;
  }
  return state;
};

export default countries;
