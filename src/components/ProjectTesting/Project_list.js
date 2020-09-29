import React from 'react'
import Each_project from './Each_project'
function Project_list(props) {
    
    return (
        <div>
            {/* TABLE */}

            <div className="project-table">
                {/* <table className="table table-hover" id="project-table"> */}
                <table className="project-table">
                    <thead className="text-left"> 
                        <tr>
                        {/* <tr className="text-center"> */}
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Due Date</th>
                            {/* <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {props.filteredTodos.map((todo) => (
                            <Each_project
                                text={todo.text}
                                description={todo.description}
                                date={todo.date}
                                key={todo.id}
                                todo={todo}
                                setTodos={props.setTodos}
                                todos={props.todos}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Project_list
