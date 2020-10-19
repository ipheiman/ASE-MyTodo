import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

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
    const handleDismiss = () =>{
        setModalShow(currentState => ({showPopup: false}));
    }

    const[{showPopup}, setModalShow] = useState({showPopup: false});

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
                        <button onClick={() => setModalShow(currentState => ({showPopup: true}))}className="trash-btn text-danger">
                            <i className="fas fa-trash"></i>
                        </button>

                        <div>
                            <Modal show={showPopup}>
                            <Modal.Header closeButton onClick={handleDismiss}>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Delete Task
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Are you sure you want to delete this task?</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleDismiss}>Cancel</Button>
                                    <Button variant="danger" onClick={deleteHandler}>Confirm</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                    </td>
                </tr>
            </div>


        </div>
    )
}

export default Each_task
