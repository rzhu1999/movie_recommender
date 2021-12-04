import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
// import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
// import { useParams } from 'react-router';
import tmdbApi, { movieType } from '../api/tmdbApi';
import apiConfig from '../api/apiConfig';
// import CastList from '../components/CastList'
// import { SwiperSlide, Swiper } from 'swiper/react/swiper-react';
import MainCard from '../components/product/Maincard';
// import { grey } from '@material-ui/core/colors';
import Logo from '../components/Logo';
import {
    Box, 
    makeStyles, 
    // CircularProgress,
    Grid,
    // Card,
    // CardActionArea,
    // CardActions,
    // CardContent,
    // CardMedia,
    Typography,
    Container,
    // Button,
    // Paper,
    // Avatar
} from '@material-ui/core';
// import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
    banner: {
        marginTop: 10,
        width: '100%',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',

    },
    title:{
        marginTop: theme.spacing(10),
        textTransform: 'uppercase',
  
    },
    moviecontent: {
        marginLeft:  theme.spacing(5),
        position: 'relative',
        marginRight: 'auto',
        padding: theme.spacing(5),
        height:'70%',
        [theme.breakpoints.up('xl')]: {
            padding: theme.spacing(8),
            marginLeft: theme.spacing(10),
          },
        img : {
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // width: '30vw',
            height: '50vh',
            borderRadius: '$border-radius',
            boxShadow: '$box-shadow',
            transform: 'scale(0)',
            // transition: transform 0.7s ease;
            marginTop: 10,
        },
       
        lg: {
            // marginTop: 80,
            textTransform: 'uppercase',
            // fontSize: '600%',
            // fontWeight: 5000,
            // lineHeight: 1,
            // padding: theme.spacing(9),
        }
    },
    
    
    goback:{
        // position:'fixed',

    },
    slo:{
      marginTop:  theme.spacing(5),
      // textTransform: 'uppercase',
    },
    slo1:{
      
      textTransform: 'uppercase',
    },
    slo2:{
  
      textTransform: 'capitalize',
    },
    slo3:{
      marginTop:  theme.spacing(2),
      textTransform: 'capitalize',
    },
}));

const Mainpage = (props) => {
    const classes = useStyles();
    const { history } = props;
    const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = {page: 1}
      try {
          const response = await tmdbApi.getMoviesList(movieType.popular, {params});
          setMovieItems(response.results);
          console.log(response.results);
      } catch {
          console.log('error');
      }
  };
  getMovies();

}, []);
    return (
      <>
      <Box >
            {movieItems.slice(7, 8).map( (item) => (
         
            <Box key={item.id}
            className={classes.banner}
            style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), 
                rgba(0,0,0,0.5)),url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}} >
          
            <Grid container className={classes.moviecontent}>
           
                <Grid item xl={7} lg={7} md={8} sm={12} xs={12}>
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </Grid>
                <Grid xl={4} lg={4} md={4} sm={12} xs={12} 
                item >
                    <Box className={classes.title}>
                    <Grid container direction="row" alignItems="center">
                      <Logo className={classes.logo} />
                      <Typography className={classes.logotext} variant="overline">Nextflex</Typography>
                    </Grid>
                    </Box>
          
                    <Box>
                        <Typography 
                        variant='h4'
                        className={classes.slo2}
                        >Your time is too precious to waste on bad movies...</Typography>
                    </Box>
                    <Box className={classes.slo}>
                        <Typography className={classes.slo1}
                        variant='h3'>Nextflex understands </Typography>
                        <Typography className={classes.slo2}
                        variant='h5'>your movie taste and recommends movies based on it. </Typography>
                    </Box>
                    <Box>
                    <Typography className={classes.slo3} variant='h5'>
                      Go grab your popcorn and we will get the job done!
                    </Typography>
                    </Box>
                </Grid>
                
            </Grid>
            </Box>
       
            ))}
        </Box>

        <Box
      sx={{
        // backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        {/* <ProductListToolbar /> */}
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {movieItems.slice(2, 20).map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <MainCard 
                product={product}  history={history} 
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
        </>
        );
}

export default withRouter(Mainpage);
