import React, { Component } from "react";
import axios from 'axios';

export default class Registration extends Component {
    render() {
        let registerUsername = ""
        let registerEmail = ""
        let registerPassword = ""
        let registerPassword2 = ""

        const register = () => {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = "http://localhost:5000/zarejestrujsie";

            axios({
                method: 'POST',
                data: {
                    username: registerUsername,
                    email: registerEmail,
                    password: registerPassword
                },
                withCredentials: true,
                url: `Access-Control-Allow-Origin: http://localhost:5000/zarejestrujsie`
            }).then((res) => console.log(res))
        }
        return (
            <div className="mainLogin">
                <form action="">
                    <label>Sign up</label>
                    <div className="input-box">
                        <input placeholder="username" onChange={e => registerUsername = e.target.value} />
                        <input placeholder="e-mail address" onChange={e => registerEmail = e.target.value} />
                        <input placeholder="password" onChange={e => registerPassword = e.target.value} />
                        <input placeholder="confirm password" onChange={e => registerPassword2 = e.target.value} />
                        <button type="button" onClick={register}>Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}
