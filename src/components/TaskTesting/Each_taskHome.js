import React from 'react'

function Each_taskHome(props) {
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

    // const logID = () =>{
    //     console.log(props.task.id)
    // }

    return (
        <div>
            {/* create the TR TD ELEMENTS DYNAMICALLY! */}
            <div className="todo">
                <tr className="text-center" >
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.text}</td>       
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.date}</td>
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.priority}</td>
                        {/* id="deleteModal" */}
         

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

export default Each_taskHome
