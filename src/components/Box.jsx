import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Box extends Component {
    render() {
        return (
            <div className="mainView">
                <div className="container flex">
                    <div className="mainView__localization">
                        <h2>Lokalizacja</h2>
                        <input type="text"/>
                        <Link className="button" to="/lokalizacja">Wyszukaj</Link>
                    </div>
                    <div className="mainView__localization">
                        <h2>Znajdz restaurcje</h2>
                        <input type="text"/>
                        <Link className="button" to="/znajdzrestauracje">Wyszukaj</Link>
                    </div>
                </div>
            </div>
        )
    }
}
