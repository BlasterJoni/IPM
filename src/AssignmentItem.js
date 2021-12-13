import { Image, Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const AssignmentItem = (props) => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch(props.assignment.content)
            .then((r) => r.text())
            .then(text => {
                setContent(text);
            })
    }, []);

    return (
        <>
            <div className="pt-3 pb-3 d-none d-lg-flex flex-row align-items-center justify-content-around align-self-stretch">
                {props.id % 2 ? <Image id="image" src={props.assignment.image} style={{ height: "350px", width: "650px", objectFit: "cover", border: "1px solid #000" }}/> : ""}
                <div id="info" className={`d-inline-flex flex-column justify-content-center ${props.id % 2 ? "align-items-end ms-3 text-end" : "align-items-start me-3 text-start"}`}>
                    <h3>{props.assignment.title}</h3>
                    <div id="resume" className={`${props.id % 2 ? "text-right" : "text-left"}`}>
                        {props.assignment.resume}
                    </div>
                    <Button variant="outline-primary" className="mt-3 align-self-center" onClick={handleShow}>See More</Button>
                </div>
                {props.id % 2 ? "" : <Image id="image" src={props.assignment.image} style={{ height: "350px", width: "650px", objectFit: "cover", border: "1px solid #000" }} />}
            </div>

            <div className="mb-5 mt-3 d-lg-none flex-column align-items-center">
                <Image id="image" src={props.assignment.image} style={{ height: "50vw", width: "90vw", objectFit: "cover", border: "1px solid #000" }}/>
                <div id="info" className="d-inline-flex flex-column justify-content-center align-items-start text-start">
                    <h3>{props.assignment.title}</h3>
                    <div id="resume" className="text-left">
                        {props.assignment.resume}
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
                    <Modal.Title>{props.assignment.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
                </Modal.Body>
            </Modal>
        </>

    );
}

export default AssignmentItem;