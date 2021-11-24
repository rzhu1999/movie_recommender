import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar color="inherit" elevation={0} {...props}>
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/login">
        <Logo />
      </RouterLink>
      <Typography> Nextflex</Typography>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
