import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  createStyles,
  Typography,
  Container,
  Box
} from '@material-ui/core';
import { reset_password } from '../actions/auth';

const useStyles = makeStyles((theme) => createStyles({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(13),
    height: '80%',
    width: '70%',
    justifyContent: 'center'
  },
  txt: {
    marginTop: theme.spacing(2),
  }
}));
const ResetPassword = () => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to="/" />;
  }

  const classes = useStyles();

  return (
    <Container className={classes.wrap}>
      <Box sx={{ mb: 3 }}>
        <Typography
          color="textPrimary"
          align="center"
          variant="h1"
        >
          Password Reset
        </Typography>
      </Box>
      <form onSubmit={(e) => onSubmit(e)}>
        <Grid className="form-group">
          <TextField
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid className="form-group">
          <Button
            className="btn btn-primary"
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Reset Password
          </Button>
        </Grid>
      </form>
      <Grid>
        <Typography
          className={classes.txt}
          color="textPrimary"
          align="center"
          variant="h4"
        >
          An email will be sent to you.
        </Typography>
      </Grid>
    </Container>
  );
};

export default connect(null, { reset_password })(ResetPassword);
