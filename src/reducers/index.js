import { combineReducers } from 'redux';

import countries from './countries';
import searchQuery from './searchQuery';
import codes from './codes';
import interfaceNames from './interfaceNames';
import isRussianL11n from './isRussianL11n';

export default combineReducers({
  countries,
  searchQuery,
  codes,
  interfaceNames,
  isRussianL11n
});
