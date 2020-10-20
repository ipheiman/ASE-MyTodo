import React, { useState, useEffect } from 'react'
import Clock from 'react-clock';
import Calendar from 'react-calendar';
import 'react-clock/dist/Clock.css';
import ClockFunction from '../components/ClockFunction'
import Task_listHome from '../components/TaskTesting/Task_listHome';
import './Homepage.css'
import Task_form from '../components/TaskTesting/Task_form';
function Homepage(props) {
    const [date, setValue] = useState(new Date());
    const [value, setTimeValue] = useState(new Date());
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskPriority, setTaskPriority] = useState("1")
    // todos is an Array State
    const [tasks, setTasks] = useState([])
    const [status, setStatus] = useState("All")
    // create a new array to contain todos
    const [filteredTasks, setFilteredTasks] = useState([])
    useEffect(() => {
        getLocalTasks()
    }, [])

    useEffect(() => {
        filterHandler()
        saveLocalTasks()
    }, [tasks,status])
    const filterHandler = () => {
         setFilteredTasks(tasks.filter(task => task.completed === false))

        }
    useEffect(() => {
        const interval = setInterval(
          () => setTimeValue(new Date()),
          1000
        );
    
        return () => {
          clearInterval(interval);
        }
      }, []);
    props.setNavBarHidden(false)

    // Save to local
    const saveLocalTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    const getLocalTasks = () => {
        if (localStorage.getItem('tasks') == null) {
            localStorage.setItem('tasks', JSON.stringify([]))
        }
        else {
            let taskLocal = JSON.parse(localStorage.getItem("tasks"))
            setTasks(taskLocal)
        }
    }

    return (
        <div className = "homepage">
            <header>
                <h1>Welcome to MyToDo!</h1>
            </header>
            
            <div className="flexbox-container" width="400dp">
            <div className="task list">
            <h2 className="upcoming-task-text">Upcoming Tasks</h2>
            <Task_listHome
                tasks={tasks}
                setTasks={setTasks}
                filteredTasks={filteredTasks}/>
            </div>
            <div className="clock-calendar">
                <ClockFunction/>
                <Calendar
                    onChange={setValue}
                    value={date}
                />
            </div>
        </div>
        </div>
    )
}

export default Homepage
