import React from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

import { FULL_NAME, SHORT_NAME, CURRENCY } from '../../constatnts';

export default function Form({ setQuery, query, getCountry }) {
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSearchBy = (selector) => {
    if (query) {
      getCountry(selector, query);
    } else {
      console.error('Invalid query');
    }
  };

  return (
    <div className={styles.topForm}>
      <input type="text" placeholder="Search..." onChange={handleQueryChange} />
      <button
        onClick={() => {
          handleSearchBy(SHORT_NAME);
        }}>
        by Short Name
      </button>
      <button
        onClick={() => {
          handleSearchBy(FULL_NAME);
        }}>
        by Full Name
      </button>
      <button
        onClick={() => {
          handleSearchBy(CURRENCY);
        }}>
        by Currency
      </button>
    </div>
  );
}

Form.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string,
  getCountry: PropTypes.func
};
