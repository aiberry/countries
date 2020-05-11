import { store } from '../index.js';
import { FULL_NAME, SHORT_NAME, CURRENCY, CODE } from '../constatnts';
import translate from 'translate';

const mapCountriesData = (oldCountries) => {
  return oldCountries.map((country) => ({
    ...country,
    languages: country.languages.map((language) => language.name).join(', '),
    regionalBlocs: country.regionalBlocs.map((block) => block.name).join(', '),
    currencies: country.currencies.map((currency) => currency.name).join(', '),
    timezones: country.timezones.join(', ')
  }));
};

export const getCountryData = (selector, query) => (dispatch) => {
  const state = store.getState();
  if (state.countries.history[selector][query]) {
    dispatch({
      type: 'SET_CURRENT_COUNTRY',
      payload: state.countries.history[selector][query]
    });
  } else {
    let url = '';
    switch (selector) {
      case CODE:
        url = url + `alpha/${query.toLowerCase()}`;
        break;
      case CURRENCY:
        url = url + `currency/${query.toLowerCase()}`;
        break;
      case FULL_NAME:
        url = url + `name/${query.toLowerCase()}?fullText=true`;
        break;
      case SHORT_NAME:
        url = url + `name/${query.toLowerCase()}`;
        break;
      default:
        break;
    }
    url = `https://restcountries.eu/rest/v2/${url}?fields=name;region;subregion;capital;flag;population;nativeName;alpha2Code;alpha3Code;currencies;languages;borders;regionalBlocs;timezones;callingCodes;topLevelDomain`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        const countries = mapCountriesData(
          Array.isArray(myJson) ? myJson : [myJson]
        );
        if (state.isRussianL11n) {
          const promises = countries.map((country) => {
            return translate(
              `${country.name}|${country.capital}|${country.region}|${country.subregion}|${country.languages}|${country.regionalBlocs}|${country.currencies}`,
              {
                to: 'ru',
                engine: 'yandex',
                key:
                  'trnsl.1.1.20200508T091919Z.e8f724f788f87b29.e7ca9e51bec84f866cd69ab99a8760aa3f83fa01'
              }
            ).then((translated) => {
              const translatedArr = translated.split('|');
              country.name = translatedArr[0];
              country.capital = translatedArr[1];
              country.region = translatedArr[2];
              country.subregion = translatedArr[3];
              country.languages = translatedArr[4];
              country.regionalBlocs = translatedArr[5];
              country.currencies = translatedArr[6];
              return country;
            });
          });
          Promise.all(promises).then((translatedCountries) => {
            dispatch({
              type: 'SET_CURRENT_COUNTRY',
              payload: translatedCountries,
              saveToHistoryQuery: query,
              selector
            });
          });
        } else {
          dispatch({
            type: 'SET_CURRENT_COUNTRY',
            payload: countries,
            saveToHistoryQuery: query,
            selector
          });
        }
        return myJson;
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line
        dispatch({ type: 'CLEAR_CURRENT_AND_HISTORY' });
      }); 
  }
};
