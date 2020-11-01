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
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                },
                data: {
                    username: registerUsername,
                    email: registerEmail,
                    password: registerPassword
                },
                withCredentials: true,
                url: `http://localhost:5000/zarejestrujsie`
            }).then((res) => console.log(res))
        }
        return (
            <div className="mainLogin">
                <form action="">
                    <label>Sign up</label>
                    <div className="mainLogin__input-box">
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
