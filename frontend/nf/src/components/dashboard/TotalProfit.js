import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';

// 4th card : Favorites
const TotalProfit = (props) => (
  <Card {...props}>
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
            128
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
          >
            <ThumbUpOutlinedIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default TotalProfit;
