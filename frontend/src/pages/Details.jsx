import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router';
import tmdbApi, { category } from '../api/tmdbApi';
import apiConfig from '../api/apiConfig';
// import CastList from '../components/CastList'
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
    // IconButton,
    Button,
    Paper
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
        marginTop: theme.spacing(5),
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
       
        h1: {
            textTransform: 'uppercase',
            fontSize: '12em',
            fontWeight: 900,
            lineHeight: 1,
            padding: theme.spacing(9),
        }
    },
    genres: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
        display: 'flex, p: 1',
        justifyContent: 'flex-start',

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
}));

const Detail = (props) => {
    const classes = useStyles();
    const [item, setItem] = useState(null);
    const { match } = props;
    const { params } = match;
    const { id } = params;
    useEffect(() => {  
        tmdbApi.detail(category.movie, id, {params:{}}).then(
        (response)=>{ 
            setItem(response);
        }
        );
    }, [id]);
    console.log(item);
    return (
        <>
            {item ? (

            <Box 
            className={classes.banner}
            style={
                {backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}
                } >
            <Grid container className={classes.moviecontent}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </Grid>
                <Grid xl={6} lg={5} md={5} sm={12} xs={12} 
                item >
                    <Box className={classes.title}>
                        <h1>{item.title}</h1>
                        <h5>{item.release_date}</h5>
                    </Box>
                    
                    <Grid container className={classes.genres} >
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
                    </Grid>
                    <Box>
                        <Typography>{item.overview}</Typography>
                    </Box>
                    <Box>
                    <Grid container className={classes.languages} >
                    <LanguageIcon/>
                    {item.spoken_languages && item.spoken_languages.slice(0, 5).map((language, i) => (
                    <Grid item key={i} className={classes.languageitem}>
                             {language.name}
                    </Grid>
                    ))}
                    </Grid>
                    </Box>
                </Grid>
                
            </Grid>
            </Box>
            ): (
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                >
                    <CircularProgress />
                </Box> 
           
              )}
        </>
        );
}

export default Detail;
