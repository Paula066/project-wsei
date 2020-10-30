import React, {Component} from "react";

export default class LoginMenu extends Component {
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
