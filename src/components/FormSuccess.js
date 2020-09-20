import React from 'react';
import '../pages/Login.css'
import '../pages/Login2.css'
import { TiTick } from "react-icons/ti";
const FormSuccess = () => {
  return (
    <div className="formSuccess">
      <div className="limiter">
        <div className="container-login100">
          <div className="formSuccess p-t-50 p-b-90">
          <i id="tick-icon"><TiTick/></i>
            <span className="login100-form-title p-b-25">
              <h1>
                <b>Registration Successful</b>
                <br></br>
              </h1>
              </span>
            <h3 className="text-center">We have received your request!</h3>
            <a  href="/" className="login100-form-btn m-t-35" >
                    <b>Back to Login</b>
                  </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSuccess;