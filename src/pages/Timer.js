import React, { Component } from 'react'
import BreakInterval from '../components/Timer/BreakInterval'
import SessionInterval from '../components/Timer/SessionInterval'
import Session from '../components/Timer/Session'
import '../App.css';
class Timer extends Component {
    
    constructor() {
        super();
        this.state = {
            // Default duration
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,
            isPlay: false
        }
        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this)
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this)
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this)
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this)
        this.onToggleMode = this.onToggleMode.bind(this)
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this)
        this.onResetTimer = this.onResetTimer.bind(this)
        this.onPlayTimer = this.onPlayTimer.bind(this)

    }
    // Functions (need to bind)
    // Increase breaklength by 1
    onIncreaseBreakLength() {
        this.setState(prevState => {
            return {
                breakLength: prevState.breakLength + 1
            }
        })
    }
    // Decrease breaklength by 1
    onDecreaseBreakLength() {
        this.setState(prevState => {
            return {
                breakLength: prevState.breakLength - 1
            }
        })
    }
    // Increase Sessionlength by 1
    // Increase timerMinute by 1
    onIncreaseSessionLength() {
        this.setState(prevState => {
            return {
                sessionLength: prevState.sessionLength + 1,
                timerMinute: prevState.timerMinute + 1
            }
        })
    }
    // Decrease Sessionlength by 1
    // Decrease timerMinute by 1
    onDecreaseSessionLength() {
        this.setState(prevState => {
            return {
                sessionLength: prevState.sessionLength - 1,
                timerMinute: prevState.timerMinute - 1
            }
        })
    }
    // Decrease timerMinute by 1 (when the countdown is running)
    onUpdateTimerMinute() {
        this.setState(prevState => {
            return {
                timerMinute: prevState.timerMinute - 1
            }
        })
    }
    // Does not need a previous state
    // Change timerminute to the original session length
    onResetTimer(){
        this.setState({
            timerMinute : this.state.sessionLength
        })
    }
    // Function to manage switch between break and session
    onToggleMode(isSession) {
        // Conditions for setState
        // Does not need a previous state
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

    onPlayTimer(isPlay){
        this.setState({
            isPlay:isPlay
        })
    }
    render() {
        document.body.style = 'background:  #ECECEC;'; 
        return (
            <div className="timer container">
                <header>
                <h1>Welcome to Timer</h1>

                </header>
                <div className="break-session-container">
                    <BreakInterval
                        // pass props
                        isPlay={this.state.isPlay}
                        breakInterval={this.state.breakLength}
                        // pass function
                        increaseBreak={this.onIncreaseBreakLength}
                        decreaseBreak={this.onDecreaseBreakLength}
                    />
                    <SessionInterval
                        isPlay={this.state.isPlay}
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
                        resetTimer={this.onResetTimer}
                        onPlayTimer={this.onPlayTimer} />
                </div>

            </div>
        )
    }

}

export default Timer