import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './App.module.css';
import CodesList from './components/CodesList';
import Form from './components/Form';
import Countries from './components/Countries';
import { setSearchQuery } from './actions/setSearchQuery';
import { getCountryData } from './actions/getCountryData';
import { getCodes } from './actions/getCodes';
import { CODE as CODEselector } from './constatnts';

import { toggleCodesList } from './actions/toggleCodesList';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.props.fillCodesList();
  }

  render() {
    const {
      setQuery,
      query,
      getCountry,
      codes,
      countries,
      isOpen,
      setCodesListOpen
    } = this.props;
    return (
      <div className={styles.wrap}>
        <Form setQuery={setQuery} query={query} getCountry={getCountry} />
        <div className={styles.mainContent}>
          <CodesList
            codes={codes}
            getCountruByCode={(code) => getCountry(CODEselector, code)}
            isOpen={isOpen}
            setOpen={setCodesListOpen}
          />
          <Countries countries={countries.current} />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isOpen: state.codes.isOpen,
    query: state.searchQuery,
    countries: state.countries,
    codes: state.searchQuery
      ? state.codes.values.filter(
          (code) =>
            code.alpha2Code.includes(state.searchQuery.toUpperCase()) ||
            code.alpha3Code.includes(state.searchQuery.toUpperCase())
        )
      : state.codes.values
  }),
  (dispatch) => ({
    setQuery: (query) => {
      dispatch(setSearchQuery(query));
    },
    getCountry: (selector, query) => {
      dispatch(getCountryData(selector, query));
    },
    fillCodesList: () => {
      dispatch(getCodes());
    },
    setCodesListOpen: () => {
      dispatch(toggleCodesList());
    }
  })
)(App);

App.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string,
  getCountry: PropTypes.func,
  codes: PropTypes.array,
  countries: PropTypes.object,
  isOpen: PropTypes.bool,
  setCodesListOpen: PropTypes.func,
  fillCodesList: PropTypes.func
};
