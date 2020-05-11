import { store } from '../index.js';

export const changeL11n = () => (dispatch) => {
  const state = store.getState();
  dispatch({ type: 'SET_IS_RUSSIAN', payload: !state.isRussianL11n });
  dispatch({ type: 'CLEAR_CURRENT_AND_HISTORY' });
  dispatch({
    type: 'CHANGE_INTERFACE_L11N',
    payload: state.isRussianL11n ? 'en' : 'ru'
  });
};
