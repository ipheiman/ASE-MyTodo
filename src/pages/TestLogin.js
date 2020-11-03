import React from 'react';
import './TestLogin.css';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import Axios from "axios";
// Axios.defaults.headers.get['Accepts'] = 'application/json';
// Axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:9000';
// Axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';


function TestLogin() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

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
      }
        ).then((response) => {
          setRegStatus("User has been created.")
        }).catch(error=>{
          setRegStatus("User has been created before.")
        });
    };

    const login = () => {
            console.log('this is the response1.');
            var url = "/backend/user/"+username+'/'+password;
            console.log(url);
            Axios.get(url).then((response) => {
          console.log('True')
          setLoginStatus('True')
        }).catch(error=>{
          setLoginStatus("Wrong username/password.")
        });
    };

    
    return (
        <div className="App">
          <div className="test-registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            />
            <label>Password</label>
            <input
              type="text"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
            <button className="btn btn-warning" onClick={register}> Register </button>
          </div>
          <h1>{regStatus}</h1>
          <div className="test-login">
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Username..."
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password..."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
                <button className="btn btn-warning" onClick={login}> Login </button>

          </div>
    
          <h1>{loginStatus}</h1>
        </div>
      );
}

export default TestLogin
