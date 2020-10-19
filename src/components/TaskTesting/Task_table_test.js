import React from 'react'

function Task_table_test(props) {
    return (
        <div>
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                    <table className="test-task-table">
                        <thead className="text-center">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Reminder Date</th>


                            </tr>
                        </thead>
                        <tbody>
                            {props.text}
                    {/* props.setSideProjects(props.sideProjects.filter(el => el.projectId !== props.sideProject.projectId)) */}
                            {/* {props.filteredTasks.map((task) => (
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
                    ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Task_table_test
