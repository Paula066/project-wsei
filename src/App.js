import React, { Component } from "react";
import './App.scss';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Header, LoginMenu, ErrorPage, Registration, FindRestaurant, Box, Hamburger, Menu, MainPage  } from './components';
import FindRestauration from "./components/FindRestauration";


export default class App extends Component {

    state = {
        burgerOpen: false,
    }

    burgerHandler = () => {
        this.setState({
            burgerOpen: !this.state.burgerOpen
        });
    }

    burgerTurnOff = () => {
        this.setState({ burgerOpen: false })
    }

    render() {
        const { burgerOpen } = this.state;

        return (
            <Router>
                <div className="main-box">
                    <Header burgerOpen={burgerOpen} onClick={this.burgerHandler}>
                        <Hamburger onClick={this.burgerHandler} />
                        {burgerOpen && <Menu onClick={this.burgerTurnOff} />}
                        <MainPage />
                    </Header>
                    <Switch>
                        <Route path="/zaloguj" component={LoginMenu}/>
                        <Route path="/zarejestrujsie" component={Registration}/>
                        <Route path="/znajdzrestauracje" component={FindRestauration}/>
                        {/*<Route path="/twojerezerwacje" exact component={LoginMenu}/>*/}
                        {/*<Route path="/kontakt" exact component={LoginMenu}/>*/}
                        <Route path="/" exact component={Box} />
                        <Route component={ErrorPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
