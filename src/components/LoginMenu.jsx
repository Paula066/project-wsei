import React, { Component } from "react";

export default class LoginMenu extends Component {
    render() {
        let registerUsername = ""
        let registerPassword = ""

        const register = () => {

            axios({
                method: 'POST',
                data: {
                    username: registerUsername,
                    email: registerEmail,
                    password: registerPassword
                },
                withCredentials: true,
                url: "http://localhost:5000/zaloguj"
            }).then((res) => console.log(res))
        }

        return (
            <div className="mainLogin">
                <form action="">
                    <label>Sign in</label>
                    <div className="mainLogin__input-box">
                        <input placeholder="username" />
                        <input placeholder="passsword" />
                        <button>Login</button>
                        <p>Not registered? <span>Create an account</span> </p>
                    </div>
                </form>
            </div>
        )
    }
}
