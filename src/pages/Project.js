import React, { useState } from 'react'
import '../components/Todo.css'
import Form from '../components/Form'
import Todolist from '../components/Todolist'
function Project(props) {
    const [inputText, setInputText] = useState("")
    // todos is an Array State
    const [todos, setTodos] = useState([])
    return (
        <div className="project">
            <header>
                <h1>
                    Heiman's todolist
                </h1>
            </header>
            <Form
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText} />
            <Todolist
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}

export default Project
