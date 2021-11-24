import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ThemeProvider,
  // Paper
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  styled
} from '@material-ui/styles';
import { checkAuthenticated, load_user } from '../actions/auth';
import Navbar from '../components/Navbar';
import { theme } from '../theme';
// import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from '../components/DashboardSidebar';

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      // backgroundColor: '#000000',
      height: '100%',
      width: '100%'
    },
    a: {
      textDecoration: 'none'
    },
    '#root': {
      height: '100%',
      width: '100%'
    },
    wrapper: {
      height: '100%'
    }
  }
}));

const DashboardLayoutRoot = styled('div')(
  () => ({
    // backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const DashboardLayoutWrapper = styled('div')(
  () => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 40
    }
  })
);

const DashboardLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const Layout = ({ checkAuthenticated, load_user,  children }) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);
  useStyles();
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayoutRoot>
        <Navbar />
        <DashboardSidebar />
        <DashboardLayoutWrapper>
          <DashboardLayoutContainer>
            <DashboardLayoutContent>
              {children}
            </DashboardLayoutContent>
          </DashboardLayoutContainer>
        </DashboardLayoutWrapper>
      </DashboardLayoutRoot>
    </ThemeProvider>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
