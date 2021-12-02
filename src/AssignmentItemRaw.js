import { Image, Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const AssignmentItem = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="pt-3 pb-3 d-none d-lg-flex flex-row align-items-center justify-content-around align-self-stretch">
                {props.id % 2 ? <Image id="image" src={props.image} style={{ height: "350px", width: "650px", objectFit: "cover" }}/> : ""}
                <div id="info" className={`d-inline-flex flex-column justify-content-center ${props.id % 2 ? "align-items-end ms-3 text-end" : "align-items-start me-3 text-start"}`}>
                    <h3>{props.title}</h3>
                    <div id="resume" className={`${props.id % 2 ? "text-right" : "text-left"}`}>
                        {props.resume}
                    </div>
                    <Button variant="outline-primary" className="mt-3 align-self-center" onClick={handleShow}>See More</Button>
                </div>
                {props.id % 2 ? "" : <Image id="image" src={props.image} style={{ height: "350px", width: "650px", objectFit: "cover" }} />}
            </div>

            <div className="mb-5 mt-3 d-lg-none flex-column align-items-center">
                <Image id="image" src={props.image} style={{ height: "50vw", width: "90vw", objectFit: "cover" }}/>
                <div id="info" className="d-inline-flex flex-column justify-content-center align-items-start text-start">
                    <h3>{props.title}</h3>
                    <div id="resume" className="text-left">
                        {props.resume}
                    </div>
                    <Button variant="outline-primary" className="mt-3 align-self-center" onClick={handleShow}>See More</Button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}
                id="assignmentModal"
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
            </Modal>
        </>

    );
}

export default AssignmentItem;