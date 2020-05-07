import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './Countries.module.css';
import PropTypes from 'prop-types';

export default function Countries({ countries }) {
  return (
    <div className={styles.root}>
      {countries.length
        ? countries.map((country) => (
            <ExpansionPanel
              key={country.name}
              defaultExpanded={countries.length === 1}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>
                  <h2 className={styles.rowName}>{country.name}</h2>
                  {country.nativeName}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <div className={styles.mainInfo}>
                    <img src={country.flag} alt="Country flag"></img>
                    <span>
                      <p>
                        <b>Capital:</b> {country.capital}
                      </p>
                      <p>
                        <b>Region:</b> {`${country.region} (${country.subregion})`}
                      </p>
                      <p>
                        <b>Population:</b> {country.population}
                      </p>
                      <p>
                        <b>Codes: </b>
                        {`${country.alpha2Code} ${country.alpha3Code}`}
                      </p>
                      <p>
                        <b>
                          {country.languages.length === 1
                            ? 'Language: '
                            : 'Languages: '}
                        </b>
                        {country.languages
                          .map((language) => language.name)
                          .join(', ')}
                      </p>
                    </span>
                    <div>
                      <p>
                        <b>Borders with: </b>
                        {country.borders.length ? country.borders.join(', ') : 'No'}
                      </p>
                      <p>
                        <b>Regional Blocs: </b>
                        {country.regionalBlocs
                          .map((block) => `${block.name} (${block.acronym})`)
                          .join(', ') || 'No'}
                      </p>
                      <p>
                        <b>Top level Domain: </b>
                        {country.topLevelDomain}
                      </p>
                      <p>
                        <b>Calling codes: </b>
                        {country.callingCodes}
                      </p>
                      <p>
                        <b>Timezones: </b>
                        {country.timezones}
                      </p>
                      <p>
                        <b>
                          {country.currencies && country.currencies.length > 1
                            ? 'Currencies: '
                            : 'Currency: '}
                        </b>
                        {country.currencies.map((currency) => (
                          <span key={country.name + currency.code}>
                            {`${currency.code} - ${currency.name} - ${currency.symbol}`}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))
        : 'no Countries'}
    </div>
  );
}

Countries.propTypes = {
  countries: PropTypes.array
};
