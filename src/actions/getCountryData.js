import { store } from '../index.js';
import { FULL_NAME, SHORT_NAME, CURRENCY, CODE } from '../constatnts';

export const getCountryData = (selector, value) => (dispatch) => {
  const state = store.getState();
  if (state.countries.history[selector][value]) {
    dispatch({
      type: 'SET_CURRENT_COUNTRY',
      payload: state.countries.history[selector][value]
    });
  } else {
    let url = 'https://restcountries.eu/rest/v2/';
    switch (selector) {
      case CODE:
        url = url + `alpha/${value.toLowerCase()}`;
        break;
      case CURRENCY:
        url = url + `currency/${value.toLowerCase()}`;
        break;
      case FULL_NAME:
        url = url + `name/${value.toLowerCase()}?fullText=true`;
        break;
      case SHORT_NAME:
        url = url + `name/${value.toLowerCase()}`;
        break;
      default:
        break;
    }
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        dispatch({
          type: 'SET_CURRENT_COUNTRY',
          payload: Array.isArray(myJson) ? myJson : [myJson],
          saveToHistoryQuery: value,
          selector
        });
        return myJson;
      })
      .catch(console.log); // eslint-disable-line
  }
};
