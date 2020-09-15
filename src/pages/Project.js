import React, { useState, useEffect } from 'react'
import '../components/Todo.css'
import Form from '../components/Form'
import Todolist from '../components/Todolist'
function Project(props) {
    document.body.style = 'background:  #F4976C;'; 
    // default states
    const [inputText, setInputText] = useState("")
    // todos is an Array State
    const [todos, setTodos] = useState([])
    const[status, setStatus] = useState("all")
    // create a new array to contain todos
    const[filteredTodos, setFilteredTodos] = useState([])

    // RUN ONCE WHEN APP STARTS
    useEffect(()=>{
        getLocalTodos()
    },[])
    // USE EFFECT
    useEffect(()=>{
        filterHandler()
        saveLocalTodos()
    }, [todos,status])
    const filterHandler = ()=>{
        switch(status)
        {
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed ===true))
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed ===false))
                break;
            default:
                setFilteredTodos(todos)

        }
    }

    // Save to local
    const saveLocalTodos = () =>{
            localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodos = ()=>{
        if (localStorage.getItem('todos') == null){
            localStorage.setItem('todos', JSON.stringify([]))
        }
        else{
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
            <Form
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
