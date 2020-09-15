import React from 'react'
import { Link } from 'react-router-dom'
function Login(props) {
    props.setNavBarHidden(true)
    return (
        <div className="login">
            <h1>Hello world :3
            <Link to="/homepage">Click to LOGIN</Link>
            </h1>
        </div>
    )
}

export default Login
