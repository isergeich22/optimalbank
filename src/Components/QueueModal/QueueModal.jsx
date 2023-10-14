import React from "react";
import styles from './QueueModal.module.css'
import { Modal } from "react-bootstrap";

export default function QueueModal() {

    return(
        <div
            className="modal show"
            style={{display: "block", position: "initial"}}
        >
            <Modal.Dialog className={styles.queueModal}>
                <Modal.Header closeButton>
                    <Modal.Title className={styles.queueHeader}>Запись в электронную очередь на ближайшее время</Modal.Title>
                </Modal.Header>
            </Modal.Dialog>
        </div>
    )

}