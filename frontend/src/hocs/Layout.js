import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  ThemeProvider,
  Paper
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  // styled
} from '@material-ui/styles';
// import PropTypes from 'prop-types';
import { checkAuthenticated, load_user } from '../actions/auth';
import Navbar from '../components/Navbar';
import { theme, darkTheme } from '../theme';
// import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from '../components/DashboardSidebar';



// const useStyles = makeStyles(() => createStyles({
//   '@global': {
//     '*': {
//       boxSizing: 'border-box',
//       margin: 0,
//       padding: 0,
//     },
//     html: {
//       '-webkit-font-smoothing': 'antialiased',
//       '-moz-osx-font-smoothing': 'grayscale',
//       height: '100%',
//       width: '100%'
//     },
//     body: {
//       // backgroundColor: '#000000',
//       height: '100%',
//       width: '100%'
//     },
//     a: {
//       textDecoration: 'none'
//     },
//     '#root': {
//       height: '100%',
//       width: '100%'
//     },
//     wrapper: {
//       height: '100%'
//     }
//   }
// }));

// Component=================================
const Layout = ({ checkAuthenticated, load_user,  children }) => {
  // Styling ============
const useStyles_side = makeStyles(() => createStyles({
  sidebar: {
    // height: '100vh',
    display: (menuState) => (menuState==="show" ? "block": "none"),
    pisition:'sticky',
    top:0,
  },
  LayoutRoot:{
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100%'
  },
  LayoutWrapper:{
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 62,
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: 10
    // }
  },
  LayoutContainer:{
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  LayoutContent:{
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  },

}));
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  // Toggle Menu
  const [menuState, setMenu] = useState('show');
  const toggleMenu = () =>{
    if (menuState === 'show') {
      setMenu('none');
    } else {
      setMenu('show');
    }
  }

  // Toggle Dark Mode
  const [themetype, setTheme] = useState('light');
  const toggleTheme = () =>{
    if (themetype === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
 
  // useStyles();

  const classes = useStyles_side();

  return (
    <ThemeProvider theme={themetype === 'light' ? theme : darkTheme }>
      <Paper  elevation={1} className={classes.LayoutRoot}>
        <Navbar 
          toggleTheme={toggleTheme} 
          toggleMenu={toggleMenu}
        />
        <DashboardSidebar 
          className={classes.sidebar} 
          menuState={menuState}/>
        <Paper 
          className={classes.LayoutWrapper}
          elevation={3}>
         <Paper 
          className={classes.LayoutContainer}
          elevation={1}>
             <Paper 
              className={classes.LayoutContent}
              elevation={0}>
              {children}
            </Paper>
          </Paper>
        </Paper>
      </Paper>
    </ThemeProvider>
  );
};

// Layout.propTypes = {
//   showMenu: PropTypes.bool
// };
export default connect(null, { checkAuthenticated, load_user })(Layout);
