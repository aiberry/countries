import { combineReducers } from 'redux';

import countries from './countries';
import searchQuery from './searchQuery';
import codes from './codes';

export default combineReducers({
  countries,
  searchQuery,
  codes
});
