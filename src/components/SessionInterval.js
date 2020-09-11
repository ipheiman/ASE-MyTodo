import React from 'react'

function SessionInterval(props) {
    function decreaseCounter(){
        if (props.breakInterval === 1){
            return
        }
        props.decreaseSession();
    }

    function increaseCounter(){
        if (props.breakInterval === 60){
            return
        }
        props.increaseSession();
    }

    return (
        <div>
            <h4>Session Length</h4>
            <div className="session-interval-container">
                <button onClick={decreaseCounter}>Down</button>
                <p className="session-interval-text">{props.sessionInterval}</p>
                <button onClick={increaseCounter}>Up</button>
            </div>
        </div>
    )   
}

export default SessionInterval
