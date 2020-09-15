import React from 'react'

function Form(props) {
    const statusHandler = (e) =>{
        // console.log(e.target.value)
        props.setStatus(e.target.value)
    }
    // upon event
    const inputTextHandler = (e) => {
        // console.log(e.target.value)
        props.setInputText(e.target.value)
    }

    const submitToDoHandler = (e) => {
        // e.preventDefault is so that you dont click the button and go to another page
        e.preventDefault()
        props.setTodos([
            // ... means append to previous items
            ...props.todos,
            {
                text: props.inputText,
                completed: false,
                // informal way of getting unique id
                id: Math.random()*1000
            }
        ])
        // Reset inputTextbar
        props.setInputText("")
    }
    return (
        <div>
            <form>
                <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitToDoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
