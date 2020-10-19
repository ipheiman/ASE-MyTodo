import React from 'react'
import Each_taskHome from './Each_taskHome'
function Task_listHome(props) {
    return (
        <div>
            {/* TABLE */}

            <div className="task-tablehome">
                {/* <table className="table table-hover" id="project-table"> */}
                <table className="task-tablehome" >
                    <thead className="text-center" width="15%">
                        <tr >
                            <th scope="col">Name</th>
                            <th scope="col" >Due Date</th>
                            <th scope="col" >Priority</th>
                    


                        </tr>
                    </thead>
                    <tbody >
                        {props.filteredTasks.map((task) => (
                            <Each_taskHome
                                text={task.text}
                                description={task.description}
                                priority={task.priority}
                                date={task.date}
                                reminderDate={task.reminderDate} 
                                key={task.id}
                                task={task}
                                setTasks={props.setTasks}
                                tasks={props.tasks}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Task_listHome
