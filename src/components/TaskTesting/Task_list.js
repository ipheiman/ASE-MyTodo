import React from 'react'
import Each_task from './Each_task'
function Task_list(props) {
    return (
        <div>
            {/* TABLE */}

            <div className="task-table">
                {/* <table className="table table-hover" id="project-table"> */}
                <table className="task-table">
                    <thead className="text-center">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Reminder Date</th>
                            {/* <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {props.filteredTasks.map((task) => (
                            <Each_task
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

export default Task_list
