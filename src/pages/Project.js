import React, { useState, useEffect } from 'react'
import DatePicker from 'react-date-picker';
import '../components/Todo/Todo.css'
import ProjectForm from '../components/Todo/ProjectForm'
import Todolist from '../components/Todo/Todolist'
function Project(props) {
    document.body.style = 'background:  #ECECEC;';
    // default states
    const [value, onChange] = useState(new Date());
    const [inputText, setInputText] = useState("")
    // todos is an Array State
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("all")
    // create a new array to contain todos
    const [filteredTodos, setFilteredTodos] = useState([])

    // RUN ONCE WHEN APP STARTS
    useEffect(() => {
        getLocalTodos()
    }, [])
    // USE EFFECT
    useEffect(() => {
        filterHandler()
        saveLocalTodos()
    }, [todos, status])
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos)

        }
    }

    // Save to local
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') == null) {
            localStorage.setItem('todos', JSON.stringify([]))
        }
        else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"))
            setTodos(todoLocal)
        }
    }
    return (
        <div className="project">
            <header>
                <h1>
                    Heiman's todolist
                </h1>
            </header>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary modal-btn" data-toggle="modal" data-target="#exampleModal">
                Add Project
</button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <div class="md-form mb-3">
                                <label>Name</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="md-form mb-4">
                                <label>Description</label>
                                <input type="text" class="form-control description-input" />
                            </div>
                            <div class="md-form mb-4">
                                <label>Due Date</label>
                                <br></br>
                                <DatePicker
                                    onChange={onChange}
                                    value={value}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectForm
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
                setStatus={setStatus}
            />

            <Todolist
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    )
}

export default Project
