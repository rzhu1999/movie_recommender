import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Activate from './pages/Activate';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Facebook from './pages/Facebook';
import Google from './pages/Google';
import Layout from './hocs/Layout';
import Explore from './pages/Explore';
import Dashboard from './pages/Dashboard';
// import UserLogin from './pages/Login';
// import Register from './pages/Register';
import Simple from './pages/Simple';
import Contentbased from './pages/Contentbased';
import Account from './pages/Account';
import Settings from './pages/Settings';
import ProductList from './pages/ProductList';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/facebook" component={Facebook} />
          <Route exact path="/google" component={Google} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm} />
          <Route exact path="/activate/:uid/:token" component={Activate} />
          <Route exact path="/app/dashboard" component={Dashboard} />
          <Route exact path="/app/simple" component={Simple} />
          <Route exact path="/app/contentbased" component={Contentbased} />
          <Route exact path="/app/explore" component={Explore} />
          <Route exact path="/app/account" component={Account} />
          <Route exact path="/app/settings" component={Settings} />
          <Route exact path="/app/products" component={ProductList} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
