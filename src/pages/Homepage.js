import React from 'react'

function Homepage(props) {
    document.body.style = 'background:  #FBE8A6;'; 
    props.setNavBarHidden(false)
    return (
        <div>
            <header>
            <h1>Welcome to MyToDo!</h1>
            </header>
        </div>
    )
}

export default Homepage
