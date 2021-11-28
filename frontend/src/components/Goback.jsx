import React from 'react';
import {withRouter} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Button, Paper} from '@material-ui/core';

const Goback = ({ history }) => {
    return (
        <Button onClick={() => history.goBack()}>
            <Paper>
                <ArrowBackIcon />
            </Paper>
        </Button>
    );
}

export default withRouter(Goback);
