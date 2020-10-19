import React from 'react'

function Each_sideproject(props) {
    const deleteHandler = () => {
        // return remaining elements that are not deleted
        props.setSideProjects(props.sideProjects.filter(el => el.projectId !== props.sideProject.projectId))
    }
    return (
        <div className = "side_project">
            <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">{props.text}
            <button onClick={deleteHandler} className="trash-btn-pill text-danger"><i className="fas fa-trash"></i></button>
            </a>
        </div>
    )
}

export default Each_sideproject
