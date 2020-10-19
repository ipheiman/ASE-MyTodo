import React from 'react'
import Each_task from './Each_task'
import Each_sideproject from './Each_sideproject'
import * as AiIcons from "react-icons/ai"

function Task_list(props) {
    return (
        <div>
            {/* SIDEBAR */}
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div>
                {props.sideProjects.map((sideProject) => (
                            <Each_sideproject
                                text={sideProject.sideProjectText}
                                key={sideProject.projectId}
                                sideProject={sideProject}
                                setSideProjects={props.setSideProjects}
                                sideProjects={props.sideProjects}
                            />
                        ))}

                </div>

                {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Projects<i className="pillIcon"><AiIcons.AiOutlinePlus /></i></a>
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Projects<i className="pillIcon"><AiIcons.AiOutlinePlus /></i></a> */}

            </div>
            {/* TABLE */}

            <div className="task-table container">
                {/* <table className="table table-hover" id="project-table"> */}
                <table className="task-table">
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
