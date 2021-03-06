import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// import Home from './containers/Home';
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
import Gallery from './pages/Gallery';
import FavList from './pages/FavList';
import Detail from './pages/Details';
import Mainpage from './pages/Main';
import Layout from './hocs/Layout';
import { createBrowserHistory } from "history";
import Ratings from './pages/Ratings';
import Admin from './Admin';
import Create from './components/admin/create';
import Edit from './components/admin/edit';
import Delete from './components/admin/delete';

const history = createBrowserHistory();
const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Layout history={history}>
                <Switch>
                    
                    <Route exact path="/" component={Mainpage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/facebook" component={Facebook} />
                    <Route exact path="/google" component={Google} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/admin/create" component={Create} />
				    <Route exact path="/admin/edit/:id" component={Edit} />
			    	<Route exact path="/admin/delete/:id" component={Delete} />
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
                    <Route 
                    exact path="/app/explore" 
                    render={(props) => <Explore {...props}/>}
                    />
                    <Route 
                    exact path="/app/ratings" 
                    render={(props) => <Ratings {...props}/>}
                    />
                    <Route 
                      exact path="/app/contentbased" 
                      render={(props) => <Contentbased {...props}/>}
                    />
                    <Route exact path="/app/account" component={Account} />
                    <Route 
                    exact path="/main" 
                    render={(props) => <Mainpage {...props}/>}
                    />
                    <Route exact path="/app/favorites" component={FavList} />
                    <Route 
                    exact path="/app/gallery" 
                    render={(props) => <Gallery {...props}/>}
                    />
                    <Route exact path="/settings/" component={Settings} />
                    <Route 
                      exact path='/app/:id' 
                      render={(props) => <Detail {...props}/>} 
                    />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;
