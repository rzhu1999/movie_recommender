import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
// import { useParams } from 'react-router';
import tmdbApi, { movieType } from '../api/tmdbApi';
import apiConfig from '../api/apiConfig';
// import CastList from '../components/CastList'
import { SwiperSlide, Swiper } from 'swiper/react/swiper-react';
import MainCard from '../components/product/Maincard';
import { grey } from '@material-ui/core/colors';
import Logo from '../components/Logo';
import {
    Box, 
    makeStyles, 
    CircularProgress,
    Grid,
    // Card,
    // CardActionArea,
    // CardActions,
    // CardContent,
    // CardMedia,
    Typography,
    Container,
    Button,
    Paper,
    Avatar
} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';

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
        marginTop: theme.spacing(15),
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
            height: '300px',
            borderRadius: '$border-radius',
            boxShadow: '$box-shadow',
            transform: 'scale(0)',
            // transition: transform 0.7s ease;
            paddingTop: 10,
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
    genresitem: {
        // padding: '0.5rem 1.5rem',
        // border: '2px solid $white',
        marginBottom: theme.spacing(3),
        marginRight:  theme.spacing(3),
        // borderRadius: '$border-radius',
        fontSize: '0.8rem',
        fontWeight: 600,
        // backgroundColor: '$body-bg',
        display: 'flex',
        lineHeight: 1,
    },
    languages:{
        marginTop:  theme.spacing(3),
    },
    languageitem:{
        marginleft:  theme.spacing(4),
        marginRight:  theme.spacing(3),
    },
    goback:{
        // position:'fixed',

    },
    slo:{
      marginTop:  theme.spacing(5),
      textTransform: 'uppercase',
    },
}));

const Mainpage = (props) => {
    const classes = useStyles();
    // const [item, setItem] = useState(null);
    const { match, history } = props;
    // const { params } = match;
    // const { id } = params;
    // useEffect(() => {  
    //     tmdbApi.detail(category.movie, id, {params:{}}).then(
    //     (response)=>{ 
    //         setItem(response);
    //     }
    //     );
    // }, [id]);

    const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = {page: 2}
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
            {movieItems.slice(1, 2).map( (item) => (
         
            <Box 
            className={classes.banner}
            style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), 
                rgba(0,0,0,0.5)),url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}} >
             <Avatar >
                <ArrowBackRoundedIcon  className={classes.goback} 
                onClick={() => history.goBack()} sx={{ color: grey[800]} } />
           </Avatar>
            <Grid container className={classes.moviecontent}>
           
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </Grid>
                <Grid xl={6} lg={6} md={6} sm={12} xs={12} 
                item >
                    <Box className={classes.title}>
                    <Grid container direction="row" alignItems="center">
                      <Logo className={classes.logo} />
                      <Typography className={classes.logotext} variant="overline">Nextflex</Typography>
                    </Grid>
                    </Box>
                    
                    {/* <Grid container className={classes.genres} >
                    {item.genres && item.genres.slice(0, 5).map((genre, i) => (
                    <Grid item key={i} className={classes.genresitem}>
                       <Paper>
                        <Button 
                         varient="outlined">
                             {genre.name}
                        </Button>
                        </Paper>
                    </Grid>
                    ))}
                    </Grid> */}
                    <Box>
                        <Typography variant='h4'>A Movie Recommendation System</Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.slo}
                        variant='h2'>Get Your Movies For Tonight</Typography>
                    </Box>
                    <Box>
                    {/* <Grid container className={classes.languages} >
                    <LanguageIcon/>
                    {item.spoken_languages && item.spoken_languages.slice(0, 5).map((language, i) => (
                    <Grid item key={i} className={classes.languageitem}>
                             {language.name}
                    </Grid>
                    ))}
                    </Grid> */}
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
