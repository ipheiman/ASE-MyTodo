import React, { Component } from 'react'
import '../App.css'
class Session extends Component {
    constructor(props) {
        super()

        this.state = {
            // By default Session
            isSession: true,
            timerSecond: 0,
            intervalId:0
        }

        this.play = this.play.bind(this)
        this.decreaseTimer = this.decreaseTimer.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)

    }

    play(){
        let intervalId = setInterval(this.decreaseTimer,1000)
        this.setState({
            intervalId : intervalId
        })
    }

    decreaseTimer(){
        switch(this.state.timerSecond){
            case 0:
                this.props.updateTimerMinute();
                this.setState({
                    timerSecond : 59

                })
                break;
            default:
                this.setState(prevState =>{
                    return{
                        timerSecond : this.state.timerSecond - 1
                    }
                })
        }

    }

    stop(){
        clearInterval(this.state.intervalId)
        }

    reset(){
        this.stop();
        this.props.resetTimer();
        this.setState({
            timerSecond:0,
        })
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
                    <button onClick={this.play}>Start</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}
export default Session
