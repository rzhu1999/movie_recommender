// import { useEffect } from 'react';
// import {
//   Link as RouterLink,
//   // useLocation
// } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  makeStyles,
  // Avatar,
  Box,
  // Divider,
  // Paper,
  List,
  // Typography
} from '@material-ui/core';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
// import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import NavItem from './NavItem';

// const user = {
//   avatar: '/static/images/avatar.JPG',
//   jobTitle: 'New User',
//   name: 'Test Username'
// };

const items = [
  {
    href: '/main',
    icon: HomeOutlinedIcon,
    title: 'Home'
  },
 
  {
    href: '/app/gallery',
    icon: ImageSearchOutlinedIcon,
    title: 'Blockbusters'
  },
  {
    href: '/app/favorites',
    icon: FavoriteBorderOutlinedIcon,
    title: 'Popular'
  },
  {
    href: '/app/dashboard',
    icon: AssessmentOutlinedIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/account',
    icon: PersonOutlineOutlinedIcon,
    title: 'My Ratings'
  },
  {
    href: '/app/ratings',
    icon: InsertEmoticonOutlinedIcon,
    title: 'Personalized'
  },
  
  {
    href: '/app/contentbased',
    icon: AssignmentOutlinedIcon,
    title: 'Recommend'
  },
  {
    href: '/app/simple',
    icon: BarChartOutlinedIcon,
    title: 'Trending'
  },
 
  {
    href: '/app/explore',
    icon: FindInPageOutlinedIcon,
    title: 'Explore'
  },
 

  // {
  //   href: '/app/settings',
  //   icon: SettingsOutlinedIcon,
  //   title: 'Settings'
  // },
];



const DashboardSidebar = ( ) => {
  const useStyles = makeStyles((theme) => ({
    // side: {
    //   height: '100vh',
    //   paddingTop: theme.spacing(9),
    //   // paddingLeft: theme.spacing(2),
    //   // backgroundColor: theme.palette.primary.main,
    //   // position: 'fixed',
    //   marginnTop: 80,
    //   top:0,
    //   position:'sticky',
    //   // display: (menuState) => (menuState==="show" ? "block": "none"),
    // },
  }));
  // const location = useLocation();

  // useEffect(() => {
  //   if (openMobile && onMobileClose) {
  //     onMobileClose();
  //   }
  // }, [location.pathname]);

  const content = (
    <Box
      sx={{
        marginTop: 63,
        p: 2 ,
        display: 'flex',
        flexDirection: 'column',
        // height: '800px',
        position:'sticky'
      
      }}
    >
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
  );
  const classes = useStyles();
  return (
    <div className={classes.side}>
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
    </div>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default DashboardSidebar;
