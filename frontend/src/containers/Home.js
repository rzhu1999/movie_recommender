import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/app/dashboard' />
    }
    return (
    <div className='container'>
        <div className='jumbotron mt-5'>
            <h1 className='display-4'>Welcome to Nextflex!</h1>
            <p className='lead'>An interactive movie recommendation system</p>
            <hr className='my-4' />
            <p>Click the Log In button</p>
            <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
        </div>
    </div>
)};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null )(Home);
