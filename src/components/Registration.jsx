import React, {Component} from "react";

export default class Registration extends Component {
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
