const isRussianL11n = (
  state = !!localStorage.getItem('isRussianL11n') || false,
  action
) => {
  if (action.type === 'SET_IS_RUSSIAN') {
    localStorage.setItem('isRussianL11n', action.payload);
    return action.payload;
  }
  return state;
};

export default isRussianL11n;
