import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  createStyles,
  makeStyles
} from '@material-ui/core';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(() => createStyles({
  card: {
    height: '100%'
  },
  icon: {
    backgroundColor: red[500],
    height: 56,
    width: 56
  }
}));

// 1st card: total movies
const Budget = (props) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      {...props}
    >
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
              TOTAL MOVIES
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              20,000
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              className={classes.icon}
              enableColorOnDark
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {/* <ArrowDownwardIcon sx={{ color: red[900] }} /> */}
          {/* <Typography
          sx={{
            color: red[900],
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography> */}
          <Typography
            color="textSecondary"
            variant="caption"
          >
            In our database
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Budget;
