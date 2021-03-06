import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import Axios from "axios";
function Task_form(props) {
    const [date, setDate] = useState(new Date());
    const [reminderDate, setReminderDate] = useState(new Date());
    // console.log((date.toDateString()))
    const statusHandler = (e) => {
        // console.log(e.target.value)
        props.setStatus(e.target.value)
    }
    // upon event
    const SideProjectNameHandler = (e) => {
        // console.log(e.target.value)
        props.setSideProjectName(e.target.value)
    }
    const submitSideProjectHandler = (e) => {
        // e.preventDefault is so that you dont click the button and go to another page
        e.preventDefault()
        console.log(props)
        props.setSideProjects([
            // ... means append to previous items
            ...props.sideProjects,
            {
                sideProjectText: props.sideProjectName,
                // informal way of getting unique id
                projectId: Math.random() * 1000
            }
        ])
        // Reset inputTextbar
        props.setSideProjectName("testing")
    }

    
    const addProjectAPI = () => {
        Axios.post("/backend/project", 
        {
         name: props.sideProjectName
        // password: passwordReg,
  }
    ).then((response) => {
        console.log("Project created");
    }).catch(error=>{
    });
}

const getProjectAPI = (e) => {
    e.preventDefault()
    Axios.get("/backend/project").then((response) => {
    console.log(response.data.projects)
    props.setSideProjects([])
    for (var i = 0;i<response.data.projects.length;i++){
        console.log(response.data.projects[i].name)
        props.setSideProjects([...props.sideProjects,
            {
                sideProjectText: response.data.projects[2].name,
                // informal way of getting unique id
                projectId: Math.random() * 1000
            }])
            console.log(props.sideProjects)
    }

}).catch(error=>{
    console.log(error)
});
}

    const TaskNameHandler = (e) => {
        // console.log(e.target.value)
        props.setTaskName(e.target.value)
    }
    const TaskDescriptionHandler = (e) => {
        // console.log(e.target.value)
        props.setTaskDescription(e.target.value)
    }
    const TaskPriorityHandler = (e) => {
        // console.log(e.target.value)
        props.setTaskPriority(e.target.value)
    }
    const submitTaskHandler = (e) => {
        // e.preventDefault is so that you dont click the button and go to another page
        e.preventDefault()
        props.setTasks([
            // ... means append to previous items
            ...props.tasks,
            {
                text: props.taskName,
                description: props.taskDescription,
                priority: props.taskPriority,
                date: date.toDateString(),
                reminderDate: reminderDate.toDateString(),
                completed: false,
                // informal way of getting unique id
                id: Math.random() * 1000
            }
        ])
        // Reset inputTextbar
        props.setTaskName("")
        props.setTaskDescription("")
    }

    return (
        <div>
            <button type="button" className="btn btn-info add-project-btn" data-toggle="modal" data-target="#projectModal">
                Add Project
                <i className="fas fa-plus add-icon"></i>
            </button>
            <div className="btn-group project-buttons">

                <div className="dropdown select">
                    <select onChange={statusHandler} name="todos" className="filter-todo browser-default custom-select">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="inprogress">In Progress</option>
                    </select>
                </div>

                {/* <!-- Button trigger modal --> */}


                <button type="button" className="btn btn-info modal-btn" data-toggle="modal" data-target="#exampleModal">
                    Add Task
                </button>

            </div>
            {/* <!-- Project Modal --> */}
            <div className="modal fade" id="projectModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <div className="md-form mb-3">
                                <label>Name</label>
                                <input value={props.sideProjectName} onChange={SideProjectNameHandler} type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={getProjectAPI} data-dismiss="modal" type="button" className="btn btn-primary">Add Project</button>
                            {/* <button onClick={submitSideProjectHandler} data-dismiss="modal" type="button" className="btn btn-primary">Add Project</button> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <div className="md-form mb-3">
                                <label>Name</label>
                                <input value={props.taskName} onChange={TaskNameHandler} type="text" className="form-control" />
                            </div>
                            <div className="md-form mb-4">
                                <label>Description</label>
                                <textarea value={props.taskDescription} onChange={TaskDescriptionHandler} rows="3" type="text" className="form-control description-input" />
                            </div>
                            <div className="md-form mb-4">
                                <label>Priority</label>
                                <select onChange={TaskPriorityHandler} name="todos" className="filter-todo browser-default custom-select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            {/* <div className="md-form mb-4">
                                <label>Assign to</label>
                                <select name="todos" className="filter-todo browser-default custom-select">
                                    <option value="1"></option>
                                    <option value="1">Gordon</option>
                                    <option value="2">Joey</option>
                                    <option value="3">Peter</option>
                                    <option value="3">Mark</option>
                                </select>
                            </div> */}
                            <div className="md-form mb-4">
                                <label>Due Date</label>
                                <br></br>
                                <DatePicker
                                    onChange={setDate}
                                    value={date}
                                />
                            </div>
                            <div className="md-form mb-4">
                                <label>Reminder</label>
                                <br></br>
                                <DatePicker
                                    onChange={setReminderDate}
                                    value={reminderDate}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={submitTaskHandler} data-dismiss="modal" type="button" className="btn btn-primary">Add Task</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Task_form
