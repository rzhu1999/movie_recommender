import {
  Avatar,
  Card,
  CardContent,
  Grid,
  makeStyles,
  createStyles,
  Typography
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';

// 4th card : Favorites
const useStyles = makeStyles(() => createStyles({
  card: {
    height: '100%'
  },
  icon: {
    backgroundColor: indigo[500],
    height: 56,
    width: 56
  }
}));
const TotalProfit = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} {...props}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              MY FAVORITES
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              54
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              className={classes.icon}
            >
              <ThumbUpOutlinedIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TotalProfit;
