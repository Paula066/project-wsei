
import React, {useState} from 'react';

const RegistrationForm = (props) =>  {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {id, value} = e.target;
        console.log(e.target);
    }

    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left"><input type="email"
                     className="form-control"
                     id="email"
                     aria-describedby="emailHelp"
                     placeholder="Enter email"
                     value={state.email}
                     onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"
                           value={state.password}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                           className="form-control"
                           id="confirmPassword"
                           placeholder="Confirm Password"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegistrationForm;
