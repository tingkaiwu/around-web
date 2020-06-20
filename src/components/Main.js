import React, { Component } from 'react';
import Register from './Register';
import { Switch, Router } from 'react-router-dom';
import { Login } from './Login';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Switch>
                    <Router path="/register">
                        <Register />
                    </Router>
                    <Router path="/login">
                        <Login />
                    </Router>
                </Switch>
            </div>
        );
    }
}

export default Main;
