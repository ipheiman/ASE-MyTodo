import React, { useState, useEffect } from 'react'
import Task_form from './Task_form'
import Task_list from './Task_list'
import * as AiIcons from "react-icons/ai"

function Task() {
    //************ SIDE PROJECTS ************
    const [sideProjectName, setSideProjectName] = useState("")
    // sideProjects is an Array State
    const [sideProjects, setSideProjects] = useState([])

    // ************ TASKS ************
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskPriority, setTaskPriority] = useState("1")
    // tasks is an Array State
    const [tasks, setTasks] = useState([])
    const [status, setStatus] = useState("All")
    // create a new array to contain tasks
    const [filteredTasks, setFilteredTasks] = useState([])

    // RUN ONCE WHEN APP STARTS
    useEffect(() => {
        getLocalTasks()
        getLocalSideProjects()
    }, [])


    useEffect(() => {
        filterHandler()
        saveLocalTasks()
        saveLocalSideProjects()
    }, [tasks, status, sideProjects])


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
    // Save sideProjects to local
    const saveLocalSideProjects = () => {
        localStorage.setItem('sideProjects', JSON.stringify(sideProjects))
    }
    const getLocalSideProjects = () => {
        if (localStorage.getItem('sideProjects') == null) {
            localStorage.setItem('sideProjects', JSON.stringify([]))
        }
        else {
            let sideProjectLocal = JSON.parse(localStorage.getItem("sideProjects"))
            setSideProjects(sideProjectLocal)
        }
    }
    // Save tasks to local
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
        <div className="body">
            <div className="project-page">
                <h1>Task</h1>
                <div className="project-todo">
                    <Task_form
                        //************ SIDE PROJECTS ************
                        sideProjectName={sideProjectName}
                        setSideProjectName={setSideProjectName}
                        sideProjects={sideProjects}
                        setSideProjects={setSideProjects}

                        //************ TASKS ************
                        taskName={taskName}
                        setTaskName={setTaskName}
                        taskDescriptio  n={taskDescription}
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
                        //************ SIDE PROJECTS ************
                        sideProjects={sideProjects}
                        setSideProjects={setSideProjects}

                        //************ TASKS ************
                        tasks={tasks}
                        setTasks={setTasks}
                        filteredTasks={filteredTasks}
                    />

                </div>


            </div>
        </div>
    )
}

export default Task
