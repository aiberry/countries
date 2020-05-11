import { russianInterface, englishInterface } from '../constatnts';

const interfaceNames = (
  state = localStorage.getItem('isRussianL11n')
    ? russianInterface
    : englishInterface,
  action
) => {
  if (action.type === 'CHANGE_INTERFACE_L11N') {
    if (action.payload === 'en') return englishInterface;
    if (action.payload === 'ru') return russianInterface;
  }
  return state;
};

export default interfaceNames;
