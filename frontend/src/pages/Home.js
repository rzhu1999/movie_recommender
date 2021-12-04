import React from 'react';
// import { Link } from 'react-router-dom';
import {
  Grid,
  makeStyles,
  Paper,
  // Typography
} from '@material-ui/core';
import Feed from '../components/Feed';
// import Leftbar from '../components/Leftbar';
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// import HeroSlide from '../components/heroslide/HeroSlide';
// import { category, movieType, tvType } from '../api/tmdbApi';

const useStyles = makeStyles((theme) => ({
  wrap: {
    paddingTop: theme.spacing(10)
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.wrap}>
      <Grid container>
        <Grid item lg={10} sm={10} xs={10}>
          <Feed />
        </Grid>
      </Grid>
    </Paper>
  // <Paper className={classes.container}>
  //   <Typography color="textPrimary" variant="h1">
  //     Nextflex Home page
  //   </Typography>
  //   <p className="lead">This is an incredible authentication system with production level features!</p>
  //   <hr className="my-4" />
  //   <p>Click the Log In button</p>
  //   <Link className="btn btn-primary btn-lg" to="/login" role="button">Login</Link>
  // </Paper>
  );
};

export default Home;
