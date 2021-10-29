import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
// import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
// import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);
  return (
    <AppBar color="inherit" {...rest}>
      <Toolbar>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
            <MenuIcon />
          </IconButton>
        </Hidden>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Typography> Nextflex</Typography>
        <Box sx={{ flexGrow: 4 }} />
        <Hidden xlDown>
          <IconButton color="inherit" size="large">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
            <Typography color="textSecondary" variant="body2">
              Notifications
            </Typography>
          </IconButton>
        </Hidden>
        {/* <RouterLink to="/login">
          <IconButton color="inherit" size="large">
            <LockOpenOutlinedIcon color="inherit" />
            <Typography color="textSecondary" variant="body2">
              Sign In
            </Typography>
          </IconButton>
        </RouterLink>
        <RouterLink to="/register">
          <IconButton color="inherit" size="large">
            <PersonAddOutlinedIcon color="inherit" />
            <Typography color="textSecondary" variant="body2">
              Sign Up
            </Typography>
          </IconButton>
        </RouterLink> */}
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
