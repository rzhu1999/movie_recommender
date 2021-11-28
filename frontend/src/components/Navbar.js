import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import {
  makeStyles,
  AppBar,
  Grid,
  Paper,
  Tooltip,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {
  ExitToApp
} from '@material-ui/icons';
// import { styled, alpha } from '@material-ui/styles';
import Logo from './Logo';
import { logout } from '../actions/auth';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(1),
  },
  logotext: {
    marginLeft: theme.spacing(1),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menu: {
    marginLeft: theme.spacing(0),
  }
}));

const Navbar = ({ toggleMenu, toggleTheme, logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();
  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <>
      <Tooltip title="Login">
        <Link className={classes.link} to="/login">
          <IconButton>
            <LockOpenOutlinedIcon />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="Register">
        <Link className={classes.link} to="/signup">
          <IconButton>
            <PersonAddOutlinedIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </>
  );

  const authLinks = () => (
    <Tooltip title="Logout">
      <Link className={classes.link} to="#!" onClick={logout_user}>
        <IconButton>
          <ExitToApp />
        </IconButton>
      </Link>
    </Tooltip>
  );
  
  // const handleChange = () => {
  //   props.onClick  && props.onClick(this.state);
  // };

  return (
    <Paper>
      <AppBar color="inherit">
        <Toolbar className={classes.toolbar}>
          <Grid container direction="row" alignItems="center">
            <IconButton
              color="inherit"
              onClick={toggleMenu}
            >
              <MenuIcon className={classes.menu} />
            </IconButton>
            <Link className="nav-link" to="/">
              <Logo className={classes.logo} />
            </Link>
            <Typography className={classes.logotext} variant="h3">Nextflex</Typography>
          </Grid>
          <IconButton onClick={toggleTheme}>
            <Brightness4Icon/>
          </IconButton>
          {isAuthenticated ? authLinks() : guestLinks()}
          {redirect ? <Redirect to="/" /> : <></>}
        </Toolbar>
      </AppBar>
    </Paper>
  );
};


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);
