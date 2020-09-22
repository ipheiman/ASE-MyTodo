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
        <div className="p-t-40 p-b-30">
            <h4>Session Length</h4>
            <div className="session-interval-container p-t-20">
                <button type="button" className="btn btn-info timer-btn" disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>Down</button>
                <p className="session-interval-text">{props.sessionInterval}</p>
                <button type="button" className="btn btn-info timer-btn" disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>Up</button>
            </div>
        </div>
    )
}

export default SessionInterval
