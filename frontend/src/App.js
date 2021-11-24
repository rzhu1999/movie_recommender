import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Facebook from './containers/Facebook';
import Google from './containers/Google';
import Dashboard from './pages/Dashboard';
import Simple from './pages/Simple';
import Explore from './pages/Explore';
import Contentbased from './pages/Contentbased';
import Account from './pages/Account';
import Settings from './pages/Settings';
import ProductList from './pages/ProductList';
import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

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
                    <Route
                        exact
                        path="/reset-password"
                        component={ResetPassword}
                    />
                    <Route
                        exact
                        path="/password/reset/confirm/:uid/:token"
                        component={ResetPasswordConfirm}
                    />
                    <Route
                        exact
                        path="/activate/:uid/:token"
                        component={Activate}
                    />
                    <Route exact path="/app/dashboard" component={Dashboard} />
                    <Route exact path="/app/simple" component={Simple} />
                    <Route exact path="/app/explore" component={Explore} />
                    <Route exact path="/app/contentbased" component={Contentbased} />
                    <Route exact path="/app/account" component={Account} />
                    <Route exact path="/app/products" component={ProductList} />
                    <Route exact path="/app/settings" component={Settings} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;
