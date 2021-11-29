import { useEffect, useState } from 'react';
import {
  CardMedia,
  CardActionArea,
  CardActions,
  // Box,
  Card,
  CardContent,
  // Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import apiConfig from '../../api/apiConfig';
import { makeStyles } from '@material-ui/styles';
import tmdbApi, { category } from '../../api/tmdbApi';



const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  },
  media:{
    height: '70vh',
    [theme.breakpoints.down('md')]: {
      height: '80vh',
    },
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
  },
  buttons:{
    justifyContent: 'space-evenly'
  }
}));


const Rcard = ({ id, history, ...rest }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    tmdbApi.detail(category.movie, id, {params:{}}).then(
      (response)=>{ 
          setItem(response);
      }
      );
  }, [id]);

  const handleCardClick=() => {
    history.push(`/app/${item.id}`);
  };
  
  const classes = useStyles();

  return (
  <Card className={classes.card} >
    <CardActionArea onClick={handleCardClick}>
    <CardMedia 
        className={classes.media} 
        image={apiConfig.w500Image(item.poster_path)}
        title={item.title} />
    
    <CardContent>
      <Typography
        align="center"
        color="textPrimary"
        // gutterBottom
        variant="button"
        component="h3"
      >
        {item.title}
      </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions>
      <Grid
        className={classes.buttons}
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <EventNoteIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            { moment(item.release_date).format('YYYY')}
          </Typography>
        </Grid>

        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ThumbUpIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {item.vote_count}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <FavoriteIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            LIKE
          </Typography>
        </Grid>
      </Grid>
    </CardActions>
  </Card>
)};


export default Rcard;
