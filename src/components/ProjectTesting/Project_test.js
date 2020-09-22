import React, { useState, useEffect } from 'react'
import Project_form from './Project_form'
import Project_list from './Project_list'
function Project_test() {
    document.body.style = 'background:  #ECECEC;';
    // SHOULD BE ALRIGHT TO PUT SAME NAME
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    // todos is an Array State
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("all")
    // create a new array to contain todos
    const [filteredTodos, setFilteredTodos] = useState([])

    return (
        <div className="project-page container">
            <h1>Project</h1>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <option className="dropdown-item" href="#">All</option>
                    <option className="dropdown-item" href="#">Completed</option>
                    <option className="dropdown-item" href="#">In Progress</option>
                </div>
            </div>
            <div className="project-todo">
            <Project_list
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
            <Project_form
                projectName={projectName}
                setProjectName={setProjectName}
                projectDescription={projectDescription}
                setProjectDescription={setProjectDescription}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
            />

            </div>


        </div>

    )
}

export default Project_test
