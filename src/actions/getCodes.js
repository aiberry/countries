export const getCodes = () => (dispatch) => {
  fetch('https://restcountries.eu/rest/v2/all?fields=alpha2Code;alpha3Code')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      dispatch({
        type: 'SET_CODES_LIST',
        payload: myJson
      });
      return myJson;
    })
    .catch(console.log); // eslint-disable-line
};
