import React from 'react';
import './TestLogin.css';
import { Link, Redirect, Route } from 'react-router-dom'
import { useEffect, useState } from "react";
import Axios from "axios";
// Axios.defaults.headers.get['Accepts'] = 'application/json';
// Axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:9000';
// Axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';


function TestLogin(props) {
  props.setNavBarHidden(true)
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [regStatus, setRegStatus] = useState("");


  // *********************API CONNECTION******************
  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("/backend/user",
      {
        username: usernameReg,
        password: passwordReg,
        email: emailReg,
      }
    ).then((response) => {
      setRegStatus("User has been created.")
    }).catch(error => {
      setRegStatus("User has been created before.")
    });
  };

  const login = () => {
    console.log('this is the response1.');
    var url = "/backend/user/" + username + '/' + password;
    console.log(url);
    Axios.get(url).then((response) => {
      console.log('True')
      setLoginStatus('True')
    }).catch(error => {
      setLoginStatus("Wrong username/password.")
    });
  };

  if (loginStatus!=='True'){
    return (
      <div className="App" >

        {/* REGISTRATION */}
        <div className="register-login">
          <div className="limiter">
            <div className="container-register100">
              <div className="wrap-login100 p-t-50 p-b-90 m-l-100">
                <span className="login100-form-title p-b-51">
                  <b>Register</b>
                </span>
                <div className="wrap-input100 validate-input m-b-16">

                  <input
                    className="input100"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => {
                      setUsernameReg(e.target.value);
                    }}
                  />
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16">
                  <input
                    className="input100"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                  />
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16">
                  <input
                    className="input100"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}
                  />
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16">
                  <input
                    className="input100"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  <span className="focus-input100"></span>
                </div>

                <button className="btn btn-primary btn-block login-btn m-t-17" onClick={register}>
                  <b className="login-text">REGISTER</b>
                </button>
                <span className="text-danger">{regStatus}</span>

              </div>
            </div>

            {/* Add vertical line */}
            <div class="vl"></div>


            <div className="container-login100">
              <div className="wrap-login100 p-t-50 p-b-90 m-r-100">
                <span className="login100-form-title p-b-51">
                  <b>Login</b>
                </span>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
                  <input
                    className="input100"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <span className="focus-input100"></span>
                </div>
                <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">

                  <input
                    className="input100"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
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

                <button className="btn btn-primary btn-block login-btn m-t-17" onClick={login}>
                  <b className="login-text">LOGIN</b>
                </button>
                <span className="text-danger">{loginStatus}</span>
              </div>


            </div>
          </div>
        </div>

      </div>
    );}
    
else{
  return(
    <Route>
      {loginStatus ==='True' ? <Redirect to="/homepage" />: undefined}
    </Route>
  );
}
}

export default TestLogin
