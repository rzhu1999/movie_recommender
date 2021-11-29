import {
  NavLink as RouterLink,
  matchPath,
  useLocation
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  Typography,
  makeStyles,
  alpha
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    marginTop: theme.spacing(30),
    paddingLeft: theme.spacing(2),
    // backgroundColor: theme.palette.primary.main,
    position: 'fixed',
    top: 60,
    [theme.breakpoints.up('sm')]: {
      // backgroundColor: 'white',
      // color: '#555',
      // border: '1px solid #ece7e7',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'left',
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.5),
      cursor: 'pointer',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    alignItems: 'left',
    [theme.breakpoints.up('sm')]: {
      // fontSize: '18px',
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const NavItem = ({ href, icon: Icon, title, ...rest }) => {
  const location = useLocation();

  const active = href ? !!matchPath({
    path: href,
    end: false
  }, location.pathname) : false;
  const classes = useStyles();
  return (
    <ListItem
      className={classes.item}
      disableGutters
      sx={{
        display: 'flex',
        py: 0
      }}
      {...rest}
    >
      <Button
        // fullWidth
        component={RouterLink}
        sx={{
          color: 'text.secondary',
          fontWeight: 'medium',
          justifyContent: 'flex-start',
          letterSpacing: 0,
          py: 1.25,
          textTransform: 'none',
          width: '100%',
          ...(active && {
            color: 'primary.main'
          }),
          '& svg': {
            mr: 1
          }
        }}
        to={href}
      >
        {Icon && (<Icon className={classes.icon} size="20" /> )}
        <Typography className={classes.text} variant="h4">
          {title}
        </Typography>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
