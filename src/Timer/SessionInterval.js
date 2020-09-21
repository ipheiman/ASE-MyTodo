import React from 'react'

function SessionInterval(props) {
    function decreaseCounter() {
        if (props.sessionInterval === 1) {
            return
        }
        props.decreaseSession();
    }

    function increaseCounter() {
        if (props.sessionInterval === 60) {
            return
        }
        props.increaseSession();
    }

    return (
        <div>
            <h4>Session Length</h4>
            <div className="session-interval-container">
                <button type="button" className="btn btn-primary" disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>Down</button>
                <p className="session-interval-text">{props.sessionInterval}</p>
                <button type="button" className="btn btn-primary" disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>Up</button>
            </div>
        </div>
    )
}

export default SessionInterval
