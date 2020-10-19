// import React from 'react'

// function Each_project(props) {
//     const deleteHandler = () => {
//         // return remaining elements that are not deleted
//         props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
//     }
//     const completeHandler = () => {
//         props.setTodos(props.todos.map((item) => {
//             if (item.id === props.todo.id) {
//                 console.log("ITEM SUPPOSED TO DELETE");
//                 return {
//                     ...item, completed: !item.completed
//                 }
//             }
//             return item

//         }))
//     }

//     return (
//         <div>
//             {/* create the TR TD ELEMENTS DYNAMICALLY! */}
//             <div className="todo">
//                 <tr>
//                     <td className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
//                         {props.text}
//                     </td>
//                     <td text-align="center" className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.description}</td>
//                     <td text-align="center" className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.date}</td>
//                     <td id="icon-td">
//                         <button onClick={completeHandler} className="complete-btn text-success"><i className="fas fa-check"></i></button>
//                     </td>
//                     <td id="icon-td">
//                         <button data-toggle="modal" data-target="#deleteProjectModal" className="trash-btn text-danger"><i className="fas fa-trash"></i></button>
//                         {/* <!-- Modal --> */}
//                         <div class="modal fade" id="deleteProjectModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                             <div class="modal-dialog" role="document">
//                                 <div class="modal-content">
//                                     <div class="modal-header">
//                                         <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete this project?</h5>
//                                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                             <span aria-hidden="true">&times;</span>
//                                         </button>
//                                     </div>
//                                     {/* <div class="modal-body">
//                                         ...
//                                     </div> */}
//                                     <div class="modal-footer">
//                                         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                                         <button data-dismiss="modal" onClick={deleteHandler} type="button" class="btn btn-danger">Confirm</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* <button onClick={deleteHandler} className="trash-btn text-danger"><i className="fas fa-trash"></i></button> */}

//                         </td>


//                     {/* <td>
//                         <button onClick={completeHandler} className="complete-btn text-success"><i className="fas fa-check"></i></button>
//                     </td>
//                     <td>
//                         <button onClick={deleteHandler} className="trash-btn text-danger"><i className="fas fa-trash"></i></button>
//                     </td> */}
//                 </tr>
//             </div>


//         </div >
//     )
// }

// export default Each_project
