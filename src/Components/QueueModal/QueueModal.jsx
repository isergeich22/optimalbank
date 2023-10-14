import React from "react";
import styles from './QueueModal.module.css'
import { Modal, Button, ModalBody } from "react-bootstrap";

export default function QueueModal() {

    const date = new Date()

    let dateString = ``

    date.getDate() < 10 ? dateString += `0${date.getDate()}` : dateString += date.getDate()

    dateString += `.`

    date.getDate() < 9 ? dateString += `0${date.getMonth() + 1}` : dateString += date.getMonth() + 1

    dateString += `.${date.getFullYear()}`



    return(
        <div
            className="modal show"
            style={{display: "none", position: "initial"}}
        >
            <Modal.Dialog className={styles.queueModal}>
                <Modal.Header className={styles.queueHeader}>
                    <Modal.Title className={styles.queueHeaderTitle}>Запись в электронную очередь на ближайшее время</Modal.Title>
                    <button className={styles.queueHeaderClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 1024 1024">
                        <path fill="#cccccc" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/>
                    </svg>
                    </button>
                </Modal.Header>
                <Modal.Body className={styles.queueBody}>
                    <p className={styles.queueBodyDate}>Дата: {dateString}</p>
                    <p>Вам доступны следующие варианты:</p>
                    <div className={styles.queueBodyChoose}>
                        <button>14:30</button>
                        <button>14:45</button>
                        <button>15:00</button>
                        <button>15:30</button>
                        <button>15:45</button>
                        <button>16:10</button>
                    </div>
                    <button>Подтвердить</button>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    )

}