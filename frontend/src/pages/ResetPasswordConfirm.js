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
  // Box
} from '@material-ui/core';
import { reset_password_confirm } from '../actions/auth';

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

const ResetPasswordConfirm = ({ match }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const { uid } = match.params;
    const { token } = match.params;

    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to="/" />;
  }
  const classes = useStyles();

  return (
    <Container className={classes.wrap}>
      <form onSubmit={(e) => onSubmit(e)}>
        <Grid className="form-group">
          <TextField
            className="form-control"
            type="password"
            placeholder="New Password"
            name="new_password"
            value={new_password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </Grid>
        <Grid className="form-group">
          <TextField
            className="form-control"
            type="password"
            placeholder="Confirm New Password"
            name="re_new_password"
            value={re_new_password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </Grid>
        <Button className="btn btn-primary" type="submit">Reset Password</Button>
      </form>
      <Grid>
        <Typography
          className={classes.txt}
          color="textPrimary"
          align="center"
          variant="h4"
        >
          Set your new password.
        </Typography>
      </Grid>
    </Container>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
