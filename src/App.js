import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './App.module.css';
import CodesList from './components/CodesList';
import Form from './components/Form';
import Countries from './components/Countries';
import LanguageTab from './components/LanguageTab';
import { getCodes } from './actions/getCodes';
import { changeL11n } from './actions/changeL11n';
import { setSearchQuery } from './actions/setSearchQuery';
import { getCountryData } from './actions/getCountryData';
import { toggleCodesList } from './actions/toggleCodesList';
import { CODE as CODEselector } from './constatnts';

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
      isCodesOpen,
      setCodesListOpen,
      onChangeL11n,
      interfaceNames,
      isRussianL11n
    } = this.props;
    return (
      <div className={styles.wrap}>
        <LanguageTab onChangeL11n={onChangeL11n} isRussianL11n={isRussianL11n} />
        <Form
          setQuery={setQuery}
          query={query}
          getCountry={getCountry}
          interfaceNames={interfaceNames.form}
        />
        <div className={styles.mainContent}>
          <CodesList
            codes={codes}
            getCountruByCode={(code) => getCountry(CODEselector, code)}
            isOpen={isCodesOpen}
            setOpen={setCodesListOpen}
            interfaceNames={interfaceNames.codesList}
          />
          <Countries
            countries={countries.current}
            interfaceNames={interfaceNames.countries}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isRussianL11n: state.isRussianL11n,
    interfaceNames: state.interfaceNames,
    isCodesOpen: state.codes.isOpen,
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
    },
    onChangeL11n: () => {
      dispatch(changeL11n());
    }
  })
)(App);

App.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string,
  getCountry: PropTypes.func,
  codes: PropTypes.array,
  countries: PropTypes.object,
  isCodesOpen: PropTypes.bool,
  setCodesListOpen: PropTypes.func,
  fillCodesList: PropTypes.func,
  interfaceNames: PropTypes.object,
  onChangeL11n: PropTypes.func,
  isRussianL11n: PropTypes.bool
};
