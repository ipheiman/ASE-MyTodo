import React, { Component } from 'react'
import '../../App.css'
import audio from './timer-sound.mp3'
import {Modal, Button} from 'react-bootstrap'
// import ReactTimeout from 'react-timeout'
class Session extends Component {
    constructor(props) {
        super()

        this.timerAlarm = new Audio(audio);

        this.state = {
            // By default isSession:true
            isSession: true,
            timerSecond: 0,
            // need intervalId to use setInterval and clearInterval
            intervalId: 0,
            showForm: false, //to display the popup in between the intervals
            timeoutId: 0, //to store the timeout id
            isSnooze: false
        }

        this.play = this.play.bind(this)
        this.decreaseTimer = this.decreaseTimer.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)
        this.startTimerAudio = this.startTimerAudio.bind(this)
        this.startTimerAudio2 = this.startTimerAudio2.bind(this)
        this.stopTimerAudio = this.stopTimerAudio.bind(this)
        this.handleDismiss = this.handleDismiss.bind(this)
        this.handleSnooze = this.handleSnooze.bind(this)
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
                        this.startTimerAudio();
                        this.setState({
                            isSession: false
                        })
                        this.props.toggleInterval(this.state.isSession);
                    }
                    else {
                        this.startTimerAudio2();
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
    startTimerAudio(){ //when switching from session to break
        this.setState({
            showForm: true,
            timeoutId: setTimeout(() => {
                this.setState({
                    isSession: false
                })
                this.handleDismiss();
            }, 60000)
        })
        this.timerAlarm.play();
        this.timerAlarm.loop = true;
        clearInterval(this.state.intervalId)
    }

    startTimerAudio2(){ //when switching from break to session
        this.setState({
            showForm: true,
            timeoutId: setTimeout(() => {
                this.setState({
                    isSession: true
                })
                this.handleDismiss();
            }, 60000)
        })
        this.timerAlarm.play();
        this.timerAlarm.loop = true;
        clearInterval(this.state.intervalId)
    }

    stopTimerAudio(){
        this.timerAlarm.pause();
    }

    handleDismiss(){ 
        this.setState({
            showForm: false
            // isSession: false
        })
        clearTimeout(this.state.timeoutId);
        this.stopTimerAudio();
        this.play();
    }

    handleSnooze(){
        this.stopTimerAudio();
        this.setState({
            isSession: !this.state.isSession,
            showForm: false
        })
        this.props.snooze();
        clearTimeout(this.state.timeoutId);
        this.play();
    }

    stop() { //when the stop button is pressed
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
                    <button type="button" className="btn btn-info timer-btn session-btn" onClick={this.play}>Start</button>
                    <button type="button" className="btn btn-info timer-btn session-btn" onClick={this.stop}>Stop</button>
                    <button type="button" className="btn btn-info timer-btn session-btn" onClick={this.reset}>Reset</button>
                </div>


                <Modal show={this.state.showForm}>
                    <Modal.Header closeButton onClick={this.handleDismiss}>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Timer Ringing Period
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>This timer will ring for 1 minute.</p>
                        <p>Click on "Snoooze" for another 5 minutes of interval before the timer rings again.</p>
                        <p>Click on "Dismiss" to start the next interval.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="info" onClick={this.handleSnooze}>Snooze</Button>
                        <Button variant="info" onClick={this.handleDismiss}>Dismiss</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default Session
