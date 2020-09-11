import React, { Component } from 'react'
import '../App.css'
class Session extends Component {
    constructor(props) {
        super()

        this.state = {
            // By default Session
            isSession: true,
            timerSecond: 0
        }
    }
    render() {
        return (
            <div>
                <div className="session-container">
                    <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span className="timer-text">{this.props.timerMinute}</span>
                    <span className="timer-text">:</span>
                    <span className="timer-text">{this.state.timerSecond === 0 ? "00" :
                     this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond }</span>
                </div>

                <div className="timer-action">
                    <button>Start</button>
                    <button>Stop</button>
                    <button>Reset</button>
                </div>
            </div>
        )
    }
}
export default Session
