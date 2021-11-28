import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 350,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
}));

const Post = ({ img, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia 
        className={classes.media} 
        image={img} 
        title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          <Typography gutterBottom variant="h4">
            Share
          </Typography>
        </Button>
        <Button size="small">
          <Typography gutterBottom variant="h4">
            Learn More
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
