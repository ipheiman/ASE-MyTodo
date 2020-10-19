import React from 'react'

function Each_sideproject(props) {
    const deleteHandler = () => {
        // return remaining elements that are not deleted
        props.setSideProjects(props.sideProjects.filter(el => el.projectId !== props.sideProject.projectId))
    }
    return (
        <div>
            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="/timer" role="tab" aria-controls="v-pills-home" aria-selected="true">{props.text}
            <button onClick={deleteHandler} className="trash-btn-pill text-danger"><i className="fas fa-trash"></i></button>
            </a>
        </div>
    )
}

export default Each_sideproject
