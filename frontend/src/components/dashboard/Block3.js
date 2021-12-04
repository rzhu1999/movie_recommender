import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  makeStyles,
  createStyles,
  Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

// 3rd card: (progress bar ) I've already watched
const useStyles = makeStyles(() => createStyles({
  card: {
    height: '100%'
  },
  icon: {
    backgroundColor: green[500],
    height: 56,
    width: 56
  }
}));

const TasksProgress = (props) => {
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
              WATCHED
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              2%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              className={classes.icon}
            >
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>
          <LinearProgress
            value={10.5}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TasksProgress;
