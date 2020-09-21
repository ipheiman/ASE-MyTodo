import React, { Component } from 'react'
import '../../App.css'
class Session extends Component {
    constructor(props) {
        super()

        this.state = {
            // By default isSession:true
            isSession: true,
            timerSecond: 0,
            // need intervalId to use setInterval and clearInterval
            intervalId: 0
        }

        this.play = this.play.bind(this)
        this.decreaseTimer = this.decreaseTimer.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)

    }

    play() {
        let intervalId = setInterval(this.decreaseTimer, 1000)
        this.props.onPlayTimer(true);
        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false
                        })
                        this.props.toggleInterval(this.state.isSession);
                    }
                    else {
                        this.setState({
                            isSession: true
                        })
                        this.props.toggleInterval(this.state.isSession);
                    }
                }

                else {
                    this.props.updateTimerMinute();
                    this.setState({
                        timerSecond: 59
                    })
                }
                break;
            default:
                this.setState(prevState => {
                    return {
                        timerSecond: this.state.timerSecond - 1
                    }
                })
        }

    }

    stop() {
        clearInterval(this.state.intervalId)
        this.props.onPlayTimer(false);
    }

    reset() {
        this.stop();
        this.props.onPlayTimer(false);
        this.props.resetTimer();
        this.setState({
            timerSecond: 0,
            isSession: true
        })
    }

    render() {
        return (
            <div>
                <div className="session-container">
                    <h4 className="p-t-20">{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span className="timer-text">{this.props.timerMinute}</span>
                    <span className="timer-text">:</span>
                    <span className="timer-text">{this.state.timerSecond === 0 ? "00" :
                        this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}</span>
                </div>

                <div className="timer-action">
                    <button type="button" className="login100-form-btn m-t-17" onClick={this.play}>Start</button>
                    <button type="button" className="login100-form-btn m-t-17" onClick={this.stop}>Stop</button>
                    <button type="button" className="login100-form-btn m-t-17" onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}
export default Session
