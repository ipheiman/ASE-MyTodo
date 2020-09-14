import React from 'react'

function Homepage(props) {
    props.setNavBarHidden(false)
    return (
        <div>
            <h1>Welcome to MyToDo!</h1>
            <h2>How can I help you Heiman?</h2>
        </div>
    )
}

export default Homepage
