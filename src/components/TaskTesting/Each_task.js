import React from 'react'

function Each_task(props) {
    const deleteHandler = () => {
        // return remaining elements that are not deleted
        props.setTasks(props.tasks.filter(el => el.id !== props.task.id))
    }
    const completeHandler = () => {
        props.setTasks(props.tasks.map((item) => {
            if (item.id === props.task.id) {
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
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.text}</td>
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.description}</td>
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.date}</td>
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.priority}</td>
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.reminderDate}</td>
                    <td>
                        <button onClick={completeHandler} className="complete-btn text-success"><i className="fas fa-check"></i></button>
                    </td>
                    <td>
                        <button onClick={deleteHandler} className="trash-btn text-danger"><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
            </div>


        </div>
    )
}

export default Each_task
