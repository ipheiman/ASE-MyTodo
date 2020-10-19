// import React, { useState, useEffect } from 'react'
// import Project_form from './Project_form'
// import Project_list from './Project_list'
// function Project_test() {
//     // SHOULD BE ALRIGHT TO PUT SAME NAME
//     const [projectName, setProjectName] = useState("")
//     const [projectDescription, setProjectDescription] = useState("")
//     // todos is an Array State
//     const [todos, setTodos] = useState([])
//     const [status, setStatus] = useState("All")
//     // create a new array to contain todos
//     const [filteredTodos, setFilteredTodos] = useState([])

//     // RUN ONCE WHEN APP STARTS
//     useEffect(() => {
//         getLocalTodos()
//     }, [])


//     useEffect(() => {
//         filterHandler()
//         saveLocalTodos()
//     }, [todos,status])
//     const filterHandler = () => {
//         switch (status) {
//             case "completed":
//                 setFilteredTodos(todos.filter(todo => todo.completed === true))
//                 break;
//             case "inprogress":
//                 setFilteredTodos(todos.filter(todo => todo.completed === false))
//                 break;
//             default:
//                 setFilteredTodos(todos)

//         }
//     }

//         // Save to local
//         const saveLocalTodos = () => {
//             localStorage.setItem('todos', JSON.stringify(todos))
//         }
    
//         const getLocalTodos = () => {
//             if (localStorage.getItem('todos') == null) {
//                 localStorage.setItem('todos', JSON.stringify([]))
//             }
//             else {
//                 let todoLocal = JSON.parse(localStorage.getItem("todos"))
//                 setTodos(todoLocal)
//             }
//         }
    
//     return (
//         <div className="project-page container">
//             <h1>Project</h1>
//             <div className="project-todo">
//             <Project_form
//                 projectName={projectName}
//                 setProjectName={setProjectName}
//                 projectDescription={projectDescription}
//                 setProjectDescription={setProjectDescription}
//                 todos={todos}
//                 setTodos={setTodos}
//                 setStatus={setStatus}
//             />
//             </div>
//             <br></br>
//             <br></br>
//             <div>
//             <Project_list
//                 todos={todos}
//                 setTodos={setTodos}
//                 filteredTodos={filteredTodos}
//             />

//             </div>


//         </div>

//     )
// }

// export default Project_test
