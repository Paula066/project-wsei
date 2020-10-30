import React, { PureComponent } from "react";
import { Hamburger, Menu } from "./";

export default class Header extends PureComponent {


    render() {
        const { children } = this.props;
        return (
            <div className="header">
                {children}
            </div>
        )
    }
}
