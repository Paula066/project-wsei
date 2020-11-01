import React, { PureComponent } from "react";
// import Box from '/src/components/Box';
import {Link} from "react-router-dom";

export default class Hamburger extends PureComponent {

    render() {

        return (
            <div className="main-page">
                <Link to="/">Main Page</Link>
            </div>
        )
    }
}
