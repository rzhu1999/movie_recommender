// import { useEffect } from 'react';
// import {
//   Link as RouterLink,
//   // useLocation
// } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  makeStyles,
  // Avatar,
  Box,
  // Divider,
  Paper,
  // Hidden,
  List,
  // Typography
} from '@material-ui/core';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import NavItem from './NavItem';

// const user = {
//   avatar: '/static/images/avatar.JPG',
//   jobTitle: 'New User',
//   name: 'Test Username'
// };

const items = [
  {
    href: '/app/dashboard',
    icon: HomeOutlinedIcon,
    title: 'Home'
  },
  {
    href: '/app/simple',
    icon: BarChartOutlinedIcon,
    title: 'Trending'
  },
  {
    href: '/app/contentbased',
    icon: AssignmentOutlinedIcon,
    title: 'Recommend'
  },
  {
    href: '/app/explore',
    icon: FindInPageOutlinedIcon,
    title: 'Explore'
  },
  {
    href: '/app/products',
    icon: FavoriteBorderOutlinedIcon,
    title: 'Favorites'
  },
  {
    href: '/app/account',
    icon: PersonOutlineOutlinedIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsOutlinedIcon,
    title: 'Settings'
  },
];

const useStyles = makeStyles((theme) => ({
  side: {
    height: '100vh',
    paddingTop: theme.spacing(9),
    // paddingLeft: theme.spacing(2),
    // backgroundColor: theme.palette.primary.main,
    // position: 'fixed',
    marginnTop: 80,
  },
}));

const DashboardSidebar = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   if (openMobile && onMobileClose) {
  //     onMobileClose();
  //   }
  // }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box> */}
      {/* <Divider /> */}
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
  const classes = useStyles();
  return (
    <Paper className={classes.side}>
      {/* <Hidden xlDown> */}
      {/* <Drawer
        anchor="left"
          // onClose={onMobileClose}
          // open={openMobile}
        variant="temporary"
        PaperProps={{
          sx: {
            width: 256
          }
        }}
      > */}
      {content}
      {/* </Drawer> */}
      {/* </Hidden> */}
      {/* <Hidden lgUp> */}
      {/* <Drawer
        anchor="left"
        open
        variant="persistent"
        PaperProps={{
          sx: {
            width: 256,
            top: 64,
            height: 'calc(100% - 64px)'
          }
        }}
      > */}
      {/* {content} */}
      {/* </Drawer> */}
      {/* </Hidden> */}
    </Paper>
  );
};

// DashboardSidebar.propTypes = {
//   onMobileClose: PropTypes.func,
//   openMobile: PropTypes.bool
// };

// DashboardSidebar.defaultProps = {
//   onMobileClose: () => {},
//   openMobile: false
// };

export default DashboardSidebar;
