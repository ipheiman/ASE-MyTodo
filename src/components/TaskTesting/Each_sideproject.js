import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

function Each_sideproject(props) {
    const deleteHandler = () => {
        // return remaining elements that are not deleted
        props.setSideProjects(props.sideProjects.filter(el => el.projectId !== props.sideProject.projectId))
    }
    const handleDismiss = () =>{
        setModalShow(currentState => ({showPopup: false}));
    }
    const[{showPopup}, setModalShow] = useState({showPopup: false});

    return (
        <div className = "side_project">
            <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">{props.text}
            <button onClick={() => setModalShow(currentState => ({showPopup: true}))} className="trash-btn-pill text-danger"><i className="fas fa-trash"></i></button>
            </a>

            <div>
                <Modal show={showPopup}>
                <Modal.Header closeButton onClick={handleDismiss}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Delete Project
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to delete this project?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleDismiss}>Cancel</Button>
                        <Button variant="danger" onClick={deleteHandler}>Confirm</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>
        
    )
}

export default Each_sideproject
