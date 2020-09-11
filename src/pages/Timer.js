import React, { Component } from 'react'
import BreakInterval from '../components/BreakInterval'
import SessionInterval from '../components/SessionInterval'
import Session from '../components/Session'
import '../App.css';
class Timer extends Component {
    constructor() {
        super();
        this.state = {
            // Default duration
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,

        }
        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this)
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this)
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this)
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this)
        this.onToggleMode = this.onToggleMode.bind(this)
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this)
        this.onResetTimer = this.onResetTimer.bind(this)

    }

    onIncreaseBreakLength() {
        this.setState(prevState => {
            return {
                breakLength: prevState.breakLength + 1
            }
        })
    }

    onDecreaseBreakLength() {
        this.setState(prevState => {
            return {
                breakLength: prevState.breakLength - 1
            }
        })
    }
    onIncreaseSessionLength() {
        this.setState(prevState => {
            return {
                sessionLength: prevState.sessionLength + 1,
                timerMinute: prevState.timerMinute + 1
            }
        })
    }

    onDecreaseSessionLength() {
        this.setState(prevState => {
            return {
                sessionLength: prevState.sessionLength - 1,
                timerMinute: prevState.timerMinute - 1
            }
        })
    }

    onUpdateTimerMinute() {
        this.setState(prevState => {
            return {
                timerMinute: prevState.timerMinute - 1
            }
        })
    }

    onResetTimer(){
        this.setState({
            timerMinute : this.state.sessionLength
        })
    }

    // Function to manage switch between break and session
    onToggleMode(isSession) {
        if (isSession) {
            this.setState({
                timerMinute: this.state.sessionLength
            })
        }
        else {
            this.setState({
                timerMinute: this.state.breakLength
            })
        }

    }
    render() {
        return (
            <div className="timer">
                <h1>Welcome to Timer</h1>
                <div className="break-session-container">
                    <BreakInterval
                        breakInterval={this.state.breakLength}
                        increaseBreak={this.onIncreaseBreakLength}
                        decreaseBreak={this.onDecreaseBreakLength}
                    />
                    <SessionInterval
                        sessionInterval={this.state.sessionLength}
                        increaseSession={this.onIncreaseSessionLength}
                        decreaseSession={this.onDecreaseSessionLength} />
                </div>
                <div>
                    <Session
                        timerMinute={this.state.timerMinute}
                        breakLength={this.state.breakLength}
                        updateTimerMinute={this.onUpdateTimerMinute}
                        toggleInterval={this.onToggleMode}
                        resetTimer={this.onResetTimer} />
                </div>

            </div>
        )
    }

}

export default Timer