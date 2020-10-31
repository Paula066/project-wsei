import React, { PureComponent } from "react";

export default class Hamburger extends PureComponent {

    render() {

        const onClick = this.props.onClick;
        return (
            <div className="hamburger" onClick={onClick}>
                <span />
                <span />
                <span />
            </div>
        )
    }
}
