import React, { Component } from "react";
import './App.scss';


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

class Menu extends Component {
    render() {
        return (
            <div className="popup">
                <ul>
                    <li>
                        <a href="/#">Zaloguj sie</a>
                    </li>
                    <li>
                        <a href="/#">Zarejestruj sie</a>
                    </li>
                    <li>
                        <a href="/#">Twoje rezerwacje</a>
                    </li>
                    <li>
                        <a href="/#">Kontakt</a>
                    </li>
                    <li>
                        <a href="/#">O nas</a>
                    </li>
                </ul>
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
