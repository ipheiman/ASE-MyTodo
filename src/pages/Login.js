import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import './Login2.css'

function Login(props) {
    props.setNavBarHidden(true)
    return (
        <div className="login">
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-t-50 p-b-90">
                        <form className="login100-form validate-form flex-sb flex-w">
                            <span className="login100-form-title p-b-51">
                                <b>Login</b>
                            </span>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
                                <input className="input100" type="text" name="username" placeholder="Username" />
                                <span className="focus-input100"></span>
                            </div>
                            <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                <input className="input100" type="password" name="password" placeholder="Password" />
                                <span className="focus-input100"></span>
                            </div>
                            <div className="flex-sb-m w-full p-t-3">
                                <div className="contact100-form-checkbox">
                                    {/* id="ckb1" is checkbox */}
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                    <label className="label-checkbox100" htmlFor="ckb1">
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <span className="txt1">
                                        Forgot Password?
                                    </span>
                                </div>
                            </div>
                            <div className="container-login100-form-btn m-t-17">
                                <Link to="/register">
                                    <span className="txt1">
                                    New User? Click here to register!
                                    </span>
                                </Link>
                                <Link to="/homepage">
                                {/* login100-form-btn m-t-17 */}
                                    <button className="btn btn-primary btn-block login-btn m-t-17" >
                                        <b className="login-text">LOGIN</b>
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
