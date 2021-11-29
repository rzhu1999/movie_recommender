import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  createStyles,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

// 2nd card
const useStyles = makeStyles(() => createStyles({
  card: {
    height: '100%'
  },
  icon: {
    backgroundColor: orange[500],
    height: 56,
    width: 56
  }
}));

const TotalCustomers = (props) => {
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
              TOTAL USERS
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              260,802
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              className={classes.icon}
            >
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        >
          {/* <ArrowUpwardIcon sx={{ color: green[900] }} />
        <Typography
          variant="body2"
          sx={{
            color: green[900],
            mr: 1
          }}
        >
          16%
        </Typography> */}
          <Typography
            color="textSecondary"
            variant="caption"
          >
            270K Ratings
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalCustomers;
