import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Box,
  Container,
  // Button,
  Link as MuiLink,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { signup } from '../actions/auth';
import FacebookIcon from '../components/icons/Facebook';
import GoogleIcon from '../components/icons/Google';

const useStyles = makeStyles((theme) => createStyles({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(13),
    height: '100%',
    width: '70%',
    justifyContent: 'center'
  },
  social: {
    marginTop: theme.spacing(1),
  }
}));

const Signup = ({ isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: ''
  });

  const {
    first_name, last_name, email, password, re_password
  } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`);

      window.location.replace(res.data.authorization_url);
    } catch (err) {
      console.log(err);
    }
  };

  const continueWithFacebook = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`);

      window.location.replace(res.data.authorization_url);
    } catch (err) {
      console.log(err);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  if (accountCreated) {
    return <Redirect to="/login" />;
  }
  const classes = useStyles();
  return (
    <Container className={classes.wrap}>
      <Container maxWidth="sm">
        <form onSubmit={(e) => onSubmit(e)}>
          <Box sx={{ mb: 3 }}>
            <Typography
              color="textPrimary"
              align="center"
              variant="h1"
            >
              Create Your Account
            </Typography>
          </Box>
          <Grid className="form-group">
            <TextField
              className="form-control"
              type="text"
              placeholder="First Name*"
              name="first_name"
              value={first_name}
              onChange={(e) => onChange(e)}
              required
              fullWidth
              // margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid className="form-group">
            <TextField
              className="form-control"
              type="text"
              placeholder="Last Name*"
              name="last_name"
              value={last_name}
              onChange={(e) => onChange(e)}
              required
              fullWidth
              // margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid className="form-group">
            <TextField
              className="form-control"
              type="email"
              placeholder="Email*"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
              fullWidth
              // margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid className="form-group">
            <TextField
              className="form-control"
              type="password"
              placeholder="Password*"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
              fullWidth
              // margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid className="form-group">
            <TextField
              className="form-control"
              type="password"
              placeholder="Confirm Password*"
              name="re_password"
              value={re_password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
              fullWidth
              // margin="normal"
              variant="outlined"
            />
          </Grid>
          <button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
          >
            Register with your email

          </button>
        </form>
        <Grid className={classes.social} container spacing={2}>
          <Grid item xs={12} md={6}>
            <button
              startIcon={<GoogleIcon />}
              variant="contained"
              type="submit"
              fullWidth
              onClick={continueWithGoogle}
            >
              Google
            </button>
          </Grid>
          <Grid item xs={12} md={6}>
            <button
              startIcon={<FacebookIcon />}
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              onClick={continueWithFacebook}
            >
              Facebook
            </button>
          </Grid>
        </Grid>
        <Typography className="mt-3">
          Already have an account?
          {' '}
          <MuiLink
            component={Link}
            to="/login"
            color="inherent"
          >
            Sign In
          </MuiLink>
        </Typography>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);
