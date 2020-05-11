import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './Countries.module.css';
import PropTypes from 'prop-types';

export default function Countries({ countries, interfaceNames }) {
  return (
    <div className={styles.root}>
      {countries.length
        ? countries.map((country) => (
            <ExpansionPanel
              key={country.name}
              className={styles.countryHeader}
              defaultExpanded={countries.length === 1}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography component={'div'}>
                  <span className={styles.rowName}>{country.name}</span>
                  <div>{country.nativeName}</div>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={styles.mainInfo}>
                <div>
                  <div>
                    <h4>{interfaceNames.capital}: </h4> <p>{country.capital}</p>
                  </div>
                  <div>
                    <h4>{interfaceNames.region}: </h4>{' '}
                    <p>{`${country.region} (${country.subregion})`}</p>
                  </div>

                  <div>
                    <h4>{interfaceNames.population}: </h4>{' '}
                    <p>{country.population}</p>
                  </div>
                  <div>
                    <h4>{interfaceNames.codes}: </h4>
                    <p>{`${country.alpha2Code} ${country.alpha3Code}`}</p>
                  </div>
                  <div>
                    <h4>
                      {`${
                        country.languages.includes(',')
                          ? interfaceNames.languages
                          : interfaceNames.language
                      }: `}
                    </h4>
                    <p>{country.languages}</p>
                  </div>
                  <div>
                    <h4>{interfaceNames.borders}: </h4>
                    <p>
                      {country.borders.length
                        ? country.borders.join(', ')
                        : interfaceNames.emptyAnswer}
                    </p>
                  </div>
                  <div>
                    <h4>
                      {country.regionalBlocs.includes(',')
                        ? interfaceNames.reregionalBlocs
                        : interfaceNames.reregionalBloc}
                      :{' '}
                    </h4>
                    <p>{country.regionalBlocs || interfaceNames.emptyAnswer}</p>
                  </div>
                  <div>
                    <h4>{interfaceNames.topLevelDomain}: </h4>
                    <p>{country.topLevelDomain}</p>
                  </div>
                  <div>
                    <h4>{interfaceNames.callingCodes}: </h4>
                    <p>{country.callingCodes}</p>
                  </div>
                  <div>
                    <h4>{interfaceNames.timezones}: </h4>
                    <p>{country.timezones}</p>
                  </div>
                  <div>
                    <h4>
                      {`${
                        country.currencies.includes(',')
                          ? interfaceNames.currencies
                          : interfaceNames.currency
                      }: `}
                    </h4>
                    <p>{country.currencies}</p>
                  </div>
                </div>
                <img src={country.flag} alt="Country flag"></img>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))
        : ''}
    </div>
  );
}

Countries.propTypes = {
  countries: PropTypes.array,
  interfaceNames: PropTypes.object
};
