// import React, { useState } from 'react'
// import DatePicker from 'react-date-picker';

// function Project_form(props) {
//     const [date, setDate] = useState(new Date());
//     // console.log((date.toDateString()))
//     const statusHandler = (e) => {
//         // console.log(e.target.value)
//         props.setStatus(e.target.value)
//     }
//     // upon event
//     const ProjectNameHandler = (e) => {
//         // console.log(e.target.value)
//         props.setProjectName(e.target.value)
//     }
//     const ProjectDescriptionHandler = (e) => {
//         // console.log(e.target.value)
//         props.setProjectDescription(e.target.value)
//     }

//     const submitToDoHandler = (e) => {
//         // e.preventDefault is so that you dont click the button and go to another page
//         e.preventDefault()
//         props.setTodos([
//             // ... means append to previous items
//             ...props.todos,
//             {
//                 text: props.projectName,
//                 description: props.projectDescription,
//                 date: date.toDateString(),
//                 completed: false,
//                 // informal way of getting unique id
//                 id: Math.random() * 1000
//             }
//         ])
//         // Reset inputTextbar
//         props.setProjectName("")
//         props.setProjectDescription("")
//     }

//     return (
//         <div>
//             <div className="btn-group project-buttons">

//                 <div className="dropdown select">
//                     <select onChange={statusHandler} name="todos" className="filter-todo browser-default custom-select">
//                         <option value="all">All</option>
//                         <option value="completed">Completed</option>
//                         <option value="inprogress">In Progress</option>
//                     </select>

//                     {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         Dropdown button
//                 </button>
//                     <div onChange={statusHandler} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                         <option value="all" className="dropdown-item">All</option>
//                         <option value="completed" className="dropdown-item">Completed</option>
//                         <option value="in-progress" className="dropdown-item">In Progress</option>
//                     </div> */}
//                 </div>

//                 {/* <!-- Button trigger modal --> */}
//                 <button type="button" className="btn btn-primary modal-btn" data-toggle="modal" data-target="#exampleModal">
//                     Add Project
//             </button>

//             </div>
//             {/* <!-- Modal --> */}
//             <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>

//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body mx-3">
//                             <div className="md-form mb-3">
//                                 <label>Name</label>
//                                 <input value={props.projectName} onChange={ProjectNameHandler} type="text" className="form-control" />
//                             </div>
//                             <div className="md-form mb-4">
//                                 <label>Description</label>
//                                 <textarea value={props.projectDescription} onChange={ProjectDescriptionHandler} rows="3" type="text" className="form-control description-input" />
//                             </div>
//                             <div className="md-form mb-4">
//                                 <label>Due Date</label>
//                                 <br></br>
//                                 <DatePicker
//                                     onChange={setDate}
//                                     value={date}
//                                 />
//                             </div>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                             <button onClick={submitToDoHandler} data-dismiss="modal" type="button" className="btn btn-primary">Add Project</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Project_form
