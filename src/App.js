import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css'


// import Home from './Home'
import userCard from './userCard'
import Main from './Main'


class App extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <Switch>
                        <Route exact path = '/' component = {Main} />
                        <Route exact path = '/user/:id' component = {userCard} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(App);