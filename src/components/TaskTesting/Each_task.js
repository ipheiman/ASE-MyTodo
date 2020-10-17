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

    // const logID = () =>{
    //     console.log(props.task.id)
    // }

    return (
        <div>
            {/* create the TR TD ELEMENTS DYNAMICALLY! */}
            <div className="todo">
                <tr className="text-center">
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.text}</td>       
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.description}</td>
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.date}</td>
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.priority}</td>
                    <td className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.reminderDate}</td>
                    <td id="icon-td">
                        <button onClick={completeHandler} className="complete-btn text-success"><i className="fas fa-check"></i></button>
                    </td>
                    <td id="icon-td">
                    {/* data-target="#deleteModal" */}
                        <button data-toggle="modal" data-target="#deleteModal" className="trash-btn text-danger"><i className="fas fa-trash"></i></button>
                        {/* <!-- Modal --> */}
                        {/* id="deleteModal" */}
                        <div className="modal fade"  id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to delete this task?</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    {/* <div className="modal-body">
                                        ...
                                    </div> */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button data-dismiss="modal" onClick={deleteHandler} type="button" className="btn btn-danger">Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <button onClick={deleteHandler} className="trash-btn text-danger"><i className="fas fa-trash"></i></button> */}
                    </td>

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

export default Each_task
