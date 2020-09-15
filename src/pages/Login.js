import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import './Login2.css'

// FUNCTIONS
const validateForm = errors => {
    // by default valid = true
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        val => val.length > 0 && (valid = false)
    );
    return valid;
};
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


function Login(props) {
    props.setNavBarHidden(true)
    const [loginInfo, setLoginInfo] = useState([])
    
    // function
    const LoginInfoHandler = () =>{
        setLoginInfo([...loginInfo,{
            fullName: null,
            email: null,
            password: null,
            errors: {
              fullName: "",
              email: "",
              password: ""
            }
        }])
    }

//       // function
//   handleChange = event => {
//     event.preventDefault();
//     // event.target is an array of states where name is key, value is value.
//     // the event.target captures what the user inputs!
//     const { name, value } = event.target;
//     let errors = this.state.errors;

//     switch (name) {
//       case "fullName":
//         errors.fullName =
//           value.length < 5 ? "Full Name must be 5 characters long!" : "";
//         break;
//       case "email":
//         errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
//         break;
//       case "password":
//         errors.password =
//           value.length < 8 ? "Password must be 8 characters long!" : "";
//         break;
//       default:
//         break;
//     }

//     this.setState({ errors, [name]: value });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     if (validateForm(this.state.errors)) {
//       console.info("Valid Form");
//     } else {
//       console.error("Invalid Form");
//     }
//   };

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
                                <input className="input100" type="password" name="pass" placeholder="Password" />
                                <span className="focus-input100"></span>
                            </div>
                            <div className="flex-sb-m w-full p-t-3 p-b-24">
                                <div className="contact100-form-checkbox">
                                    {/* id="ckb1" is checkbox */}
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                    <label className="label-checkbox100" htmlFor="ckb1">
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <a className="txt1">
                                        Forgot?
                                    </a>
                                </div>
                            </div>
                            <div className="container-login100-form-btn m-t-17">
                                <Link to="/homepage">
                                    {/* className="btn-primary btn-block btn-lg" */}
                                    <button className="login100-form-btn" >
                                        <b>Login</b>
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
