import React, { Component } from "react";
import './App.scss';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom'


class Header extends Component {

    state = {
        burgerOpen: false,
    }

    burgerHandler = () => {

        this.setState({
            burgerOpen: !this.state.burgerOpen
        });
    }

    render() {
        const burgerOpen = this.state.burgerOpen;
        return (
            <div className="header">
                <Hamburger onClick={this.burgerHandler} />
                {burgerOpen && <Menu />}
            </div>
        )
    }
}

class Hamburger extends Component {

    render() {

        const onClick = this.props.onClick;
        return (
            <div className="hamburger" onClick={onClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}

class ErrorPage extends Component {
    render() {
        return (
            <h1>Strona nie istnieje</h1>
        )
    }
}

class Menu extends Component {
    render() {
        return (
            <Router>
                <section>
                    <Switch>
                        <Route path="/zaloguj" exact component={LoginMenu}/>
                        <Route path="/zarejestrujsie" exact component={RejestrationMenu}/>
                        {/*<Route path="/twojerezerwacje" exact component={LoginMenu}/>*/}
                        {/*<Route path="/kontakt" exact component={LoginMenu}/>*/}
                        <Route component={ErrorPage}/>
                    </Switch>
                </section>
                <div className="popup">
                    <ul>
                        <li>
                            <NavLink to="/zaloguj">Zaloguj sie</NavLink>
                        </li>
                        <li>
                            <NavLink to="/zarejestrujsie">Zarejestruj sie</NavLink>
                        </li>
                        <li>
                            <NavLink to="/twojerezerwacje">Twoje rezerwacje</NavLink>
                        </li>
                        <li>
                            <NavLink to="/kontakt">Kontakt</NavLink>
                        </li>
                        <li>
                            <NavLink to="/onas">O nas</NavLink>
                        </li>
                    </ul>
                </div>
            </Router>

        )
    }
}

class LoginMenu extends Component {
    render() {
        return (
            <div className="mainLogin">
                <form action="">
                    <label>Sign in</label>
                    <div className="input-box">
                        <input placeholder="username"/>
                        <input placeholder="passsword"/>
                        <button>Login</button>
                        <p>Not registered? <span>Create an account</span> </p>
                    </div>
                </form>
            </div>
        )
    }
}

class RejestrationMenu extends Component {
    render() {
        return (
            <div className="mainLogin">
                <form action="">
                    <label>Sign up</label>
                    <div className="input-box">
                        <input placeholder="username"/>
                        <input placeholder="e-mail address"/>
                        <input placeholder="password"/>
                        <input placeholder="confirm password"/>
                        <button>Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}

class Box extends Component {
    render() {
        return (
            <div className="box">
                <div className="container flex">
                    <div className="localization">
                        <h2>Lokalizacja</h2>
                        <input type="text"/>
                        <button>Szukaj</button>
                    </div>
                    <div className="localization">
                        <h2>Znajdz restaurcje</h2>
                        <input type="text"/>
                        <button>Szukaj</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default class App extends Component {

    render() {
        return (
            <div className="main-box">
                <Header />
                <Box />
            </div>
        );
    }
}
