import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ImgButton from '../button/imagebtn';

export default function ModalState({ ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        document.body.style.backgroundColor = "white"
        setShow(false)
    };
    const handleShow = () => setShow(true);
    return (
        <>
            <ImgButton variant="primary" onClick={() => {
                document.body.style.backgroundColor = "darkgray"
                handleShow()
            }} />

            <Modal className="modal-dialog modal-lg" show={show} onHide={() => { handleClose() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.children[0]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.children[1]}</Modal.Body>
            </Modal>
        </>
    );
}