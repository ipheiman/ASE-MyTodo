import React from 'react'
import Clock from 'react-clock/dist/umd/Clock';
class ClockFunction extends React.Component {

    constructor() {
        super();
        this.state = { time: new Date() }; // initialise the state
    }

    componentDidMount() { // create the interval once component is mounted
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); // every 1 seconds
    }

    componentWillUnmount() { // delete the interval just before component is removed
        clearInterval(this.update);
    }

    render() {
        const { time } = this.state; // retrieve the time from state

        return (<div>
            <h1>
                {/* print the string prettily */}
                {time.toLocaleTimeString()}
            </h1>
        </div>);
    }
}

export default ClockFunction