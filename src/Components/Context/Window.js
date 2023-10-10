import React from "react";
import { Modal, Button } from "react-bootstrap";
import {useModal} from "./ModalContext"

export default function Window() {

    const modal = useModal()

    if(!modal.visible) return null

    return (
        <div
          className="modal show"
          style={{ display: 'block', position: 'fixed' }}
          onClick={modal.toggle}
        >
          <Modal.Dialog >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )

}