import React from 'react';
import validate from '../components/FormValidation/validateInfo';
import useForm from '../components/FormValidation/useForm';
import '../pages/Login.css'
import '../pages/Login2.css'


// submitForm is a function from Form.js using hook
// need to set it to True if user has a valid form and clicks on submit
// update the form.js so that FormSuccess page is rendered
const Register = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="register">
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-50 p-b-90">
            <form onSubmit={handleSubmit} className="login100-form validate-form flex-sb flex-w" noValidate>
              <span className="login100-form-title p-b-51">
                <b>Register</b>
              </span>
              <div className="wrap-input100 validate-input m-b-16">
                <input
                  className="input100"
                  type='text'
                  name='username'
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                />
                <span className="focus-input100"></span>

              </div>
              <div className="form-inputs ">
                {errors.username && <p>{errors.username}</p>}
              </div>

              <div className="wrap-input100 validate-input m-b-16">
                <input
                  className='input100'
                  type='email'
                  name='email'
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                <span className="focus-input100"></span>

              </div>
              <div className="form-inputs">
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className="wrap-input100 validate-input m-b-16">
                <input
                  className='input100'
                  type='password'
                  name='password'
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
                <span className="focus-input100"></span>

              </div>
              <div className="form-inputs">
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className="wrap-input100 validate-input m-b-16">
                <input
                  className='input100'
                  type='password'
                  name='password2'
                  placeholder="Confirm Password"
                  value={values.password2}
                  onChange={handleChange}
                />
                <span className="focus-input100"></span>

              </div>
              <div className="form-inputs">
                {errors.password2 && <p>{errors.password2}</p>}
              </div>
              <div className="container-login100-form-btn">
                <span className="txt1">
                  <a className="txt1" href='/'>
                    Already have an account? Click here to login!
                  </a>
                </span>

                {/* <button type="submit" className="login100-form-btn m-t-17" >
                  <b>Register</b>
                </button> */}
                <button type="submit" className="btn btn-primary btn-block login-btn m-t-17" >
                  <b className="login-text">REGISTER</b>
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Register;