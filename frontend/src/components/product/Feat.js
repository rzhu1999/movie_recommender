import PropTypes from 'prop-types';
import {
  CardMedia,
  // CardActionArea,
  // CardActions,
  // Box,
  Card,
  CardContent,
  // Divider,
  // Grid,
  // Typography,
} from '@material-ui/core';
// import moment from 'moment';
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
// import EventNoteIcon from '@material-ui/icons/EventNote';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import apiConfig from '../../api/apiConfig';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  mtitle:{
    textTransform: 'uppercase',
  },
  card: {
    // height: '90%',
  },
  media:{
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      height: '100vh',
    },
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
  },
}));


const Feat = ({  history, product, ...rest }) => {

  
  const handleCardClick=() => {
    history.push(`/app/${product.id}`);
  };
  
  const classes = useStyles();

  return (
  <Card className={classes.card} >
    <CardContent onClick={handleCardClick}>
    <CardMedia 
        className={classes.media} 
        image={apiConfig.originalImage(product.backdrop_path)}
        title={product.title} >
      
      </CardMedia>
      <h2
        className={classes.mtitle}
        align="center"
        // color="textPrimary"
        // // gutterBottom
        // variant="h1"
        // color='primary'
      >
        {product.title}
      </h2>
    </CardContent>
  </Card>
)};

Feat.propTypes = {
  product: PropTypes.object.isRequired
};

export default Feat;
