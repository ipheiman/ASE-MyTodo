import React from 'react'

function BreakInterval(props) {
    function decreaseCounter(){
        // if minutes 1, cant reduce further
        if (props.breakInterval === 1){
            return
        }
        props.decreaseBreak();
    }

    function increaseCounter(){
        if (props.breakInterval === 60){
            return
        }
        props.increaseBreak();
    }

    return (
        <div>
            <h4>Break Length</h4>
            <div className="break-interval-container">
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>Down</button>
                <p className="break-interval-text">{props.breakInterval}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>Up</button>
            </div>
        </div>
    )

}

export default BreakInterval
