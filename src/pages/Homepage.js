import React, { useState, useEffect } from 'react'
import Clock from 'react-clock';
import Calendar from 'react-calendar';
import 'react-clock/dist/Clock.css';
function Homepage(props) {
    document.body.style = 'background:  #ECECEC';
    const [date, setValue] = useState(new Date());
    const [value, onChange] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date()),
            1000
        );
        return () => {
            clearInterval(interval);
        }
    }, []);
    props.setNavBarHidden(false)
    return (
        <div className="homepage">
            <header>
                <h1>Welcome to MyToDo!</h1>
            </header>
            <div className="clock-calendar">
                <Clock className="clock" value={value} />
                <Calendar
                    onChange={onChange}
                    value={date}
                />
            </div>
        </div>
    )
}

export default Homepage
