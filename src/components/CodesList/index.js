import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import EmojiFlags from '@material-ui/icons/EmojiFlags';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BlurOn from '@material-ui/icons/BlurOn';
import PropTypes from 'prop-types';

import styles from './CodesList.module.css';

export default function CodesList({
  codes,
  getCountruByCode,
  isOpen,
  setOpen,
  interfaceNames
}) {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={styles.root}>
      <ListItem button onClick={setOpen}>
        <ListItemIcon>
          <EmojiFlags />
        </ListItemIcon>
        <ListItemText primary={interfaceNames.name} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpen} timeout={10} unmountOnExit>
        <List component="div" disablePadding>
          {codes.map((code) => (
            <ListItem
              button
              key={code.alpha2Code}
              onClick={() => getCountruByCode(code.alpha2Code)}>
              <ListItemIcon>
                <BlurOn />
              </ListItemIcon>
              <ListItemText primary={`${code.alpha2Code} - ${code.alpha3Code}`} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}

CodesList.propTypes = {
  codes: PropTypes.array,
  getCountruByCode: PropTypes.func,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  interfaceNames: PropTypes.object
};
