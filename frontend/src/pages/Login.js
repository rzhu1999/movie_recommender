import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Button,
  Link as MuiLink,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { login } from '../actions/auth';
import FacebookIcon from '../components/icons/Facebook';
import GoogleIcon from '../components/icons/Google';

const useStyles = makeStyles((theme) => createStyles({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(20),
    height: '100%',
    width: '70%',
    justifyContent: 'center'
  },
  social: {
    marginTop: theme.spacing(1),
  }
}));

const Login = ({ isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
  const classes = useStyles();
  return (
    <Container
      className={classes.wrap}
    >
      <Helmet>
        <title>Login | Nextflex</title>
      </Helmet>
      <Container maxWidth="sm">
        <form onSubmit={(e) => onSubmit(e)}>
          <Box sx={{ mb: 3 }}>
            {/* <Logo /> */}
            <Typography
              color="textPrimary"
              align="center"
              variant="h1"
            >
              Sign In
            </Typography>
          </Box>

          <Grid className="form-group">
            <TextField
              fullWidth
              className="form-control"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid className="form-group">
            <TextField
              fullWidth
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid className="form-group">
            <Button
              fullWidth
              color="primary"
              type="submit"
              variant="contained"
            >
              Login with your Email
            </Button>
          </Grid>
        </form>
        <Grid className={classes.social} container spacing={2}>
          <Grid item xs={12} md={6}>
            <Button
              startIcon={<GoogleIcon />}
              color="primary"
              fullWidth
              variant="contained"
              type="submit"
              onClick={continueWithGoogle}
            >
              Google
            </Button>
          </Grid>
          <br />
          <Grid item xs={12} md={6}>
            <Button
              startIcon={<FacebookIcon />}
              color="primary"
              fullWidth
              variant="contained"
              type="submit"
              onClick={continueWithFacebook}
            >
              Facebook
            </Button>
          </Grid>
        </Grid>
        <Typography>
          Don&apos;t have an account?
          {' '}
          <MuiLink
            component={Link}
            vairant="h4"
            to="/signup"
            color="inherent"
          >
            Sign Up
          </MuiLink>
        </Typography>
        <Typography className="mt-3">
          Forgot your Password?
          {' '}
          <MuiLink
            component={Link}
            vairant="h4"
            to="/reset-password"
            color="inherent"
          >
            Reset Password
          </MuiLink>
        </Typography>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
