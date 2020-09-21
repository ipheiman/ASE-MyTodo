import React from 'react'

function Homepage(props) {
    document.body.style = 'background:  #ECECEC'; 
    props.setNavBarHidden(false)
    return (
        <div className="homepage">
            <header>
            <h1>Welcome to MyToDo!</h1>
            </header>
        </div>
    )
}

export default Homepage
