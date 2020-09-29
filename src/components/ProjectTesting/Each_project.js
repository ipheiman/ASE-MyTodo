import React from 'react'

function Each_project(props) {
    const deleteHandler = () => {
        // return remaining elements that are not deleted
        props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
    }
    const completeHandler = () => {
        props.setTodos(props.todos.map((item) => {
            if (item.id === props.todo.id) {
                console.log("ITEM SUPPOSED TO DELETE");
                return {
                    ...item, completed: !item.completed
                }
            }
            return item

        }))
    }

    return (
        <div>
            {/* create the TR TD ELEMENTS DYNAMICALLY! */}
            <div className="todo">
                <tr>
                    <td className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
                        <button onClick={completeHandler} className="complete-btn text-success"><i className="fas fa-check"></i></button>
                        <button onClick={deleteHandler} className="trash-btn text-danger"><i className="fas fa-trash"></i></button>
                        {props.text}
                    </td>

                    <td text-align="center" className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.description}</td>
                    <td text-align="center" className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.date}</td>

                    {/* <td>
                        <button onClick={completeHandler} className="complete-btn text-success"><i className="fas fa-check"></i></button>
                    </td>
                    <td>
                        <button onClick={deleteHandler} className="trash-btn text-danger"><i className="fas fa-trash"></i></button>
                    </td> */}
                </tr>
            </div>


        </div>
    )
}

export default Each_project
