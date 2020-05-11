import React from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

import { FULL_NAME, SHORT_NAME, CURRENCY } from '../../constatnts';

export default function Form({ setQuery, query, getCountry, interfaceNames }) {
  const handleSearchBy = (selector) => {
    if (query) {
      getCountry(selector, query);
    } else {
      console.error('Invalid query'); // eslint-disable-line
    }
  };

  return (
    <div className={styles.topForm}>
      <input
        type="text"
        placeholder={`${interfaceNames.inputPlaceholder} ...`}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={() => handleSearchBy(SHORT_NAME)}>
        {interfaceNames.shortButton}
      </button>
      <button onClick={() => handleSearchBy(FULL_NAME)}>
        {interfaceNames.fullButton}
      </button>
      <button onClick={() => handleSearchBy(CURRENCY)}>
        {interfaceNames.currencyButton}
      </button>
    </div>
  );
}

Form.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string,
  getCountry: PropTypes.func,
  interfaceNames: PropTypes.object
};
