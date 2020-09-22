import React, { useState, useEffect } from 'react'
import Task_form from './Task_form'
import Task_list from './Task_list'
function Task() {
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskPriority, setTaskPriority] = useState("1")
    // todos is an Array State
    const [tasks, setTasks] = useState([])
    const [status, setStatus] = useState("All")
    // create a new array to contain todos
    const [filteredTasks, setFilteredTasks] = useState([])

    // RUN ONCE WHEN APP STARTS
    useEffect(() => {
        getLocalTasks()
    }, [])


    useEffect(() => {
        filterHandler()
        saveLocalTasks()
    }, [tasks,status])
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTasks(tasks.filter(task => task.completed === true))
                break;
            case "inprogress":
                setFilteredTasks(tasks.filter(task => task.completed === false))
                break;
            default:
                setFilteredTasks(tasks)

        }
    }

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
        <div className="project-page container">
            <h1>Task</h1>
            <div className="project-todo">
            <Task_form
                taskName={taskName}
                setTaskName={setTaskName}
                taskDescription={taskDescription}
                setTaskDescription={setTaskDescription}
                taskPriority={taskPriority}
                setTaskPriority={setTaskPriority}
                tasks={tasks}
                setTasks={setTasks}
                setStatus={setStatus}
            />
            </div>
            <br></br>
            <br></br>
            <div>
            <Task_list
                tasks={tasks}
                setTasks={setTasks}
                filteredTasks={filteredTasks}
            />

            </div>


        </div>

    )
}

export default Task
