import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './LanguageTab.module.css';
import PropTypes from 'prop-types';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function SimpleTabs({ onChangeL11n, isRussianL11n }) {
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Tabs
          value={Number(isRussianL11n)}
          onChange={onChangeL11n}
          aria-label="simple tabs example"
          className={styles.topTab}>
          <Tab
            label={
              <div>
                <img src="https://restcountries.eu/data/gbr.svg" alt="Eng" />
                English
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div>
                <img src="https://restcountries.eu/data/rus.svg" alt="Rus" />
                Русский
              </div>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}

SimpleTabs.propTypes = {
  onChangeL11n: PropTypes.func,
  isRussianL11n: PropTypes.bool
};
