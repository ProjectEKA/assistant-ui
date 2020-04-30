import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import * as PropTypes from 'prop-types';
import SettingsIcon from '@material-ui/icons/Settings';
import useStyles from './Header.style';
import logo from '../../assets/images/logo.svg';
import HeaderMenu from '../HeaderMenu';

const Header = ({ name, isAuthenticated }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolBar}>
        <Link href="/" variant="body1" className={classes.logoLink} underline="none">
          <img src={logo} height="32" alt={name} title={name} />
        </Link>
        <Link
          href="/#/admin-settings"
          color='inherit'
        >
          <SettingsIcon />
        </Link>
        {isAuthenticated && <HeaderMenu /> }
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
