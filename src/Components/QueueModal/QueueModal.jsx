import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import styles from './QueueModal.module.css';

export default function QueueModal({ workingTime, isOpen, setIsOpen }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const date = new Date();
  let dateString = date.toLocaleDateString();
  const timeOptions = ['10:00', '11:00', '12:00', '12:30', '13:00', '13:30', '14:00']; // будет workingTime анализ

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedTime) {
      console.log(`Выбранное время: ${selectedTime}`);
    }
    setIsOpen(false);
  };

  return (
    <Modal
      title="Запись в электронную очередь на ближайшее время"
      visible={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={null}
      closeIcon={<CloseOutlined className={styles.closeIcon} />}>
      <div className={styles.queueBody}>
        <p className={styles.queueBodyDate}>Дата: {dateString}</p>
        {timeOptions.length > 0 ? (
          <>
            <p>Вам доступны следующие варианты:</p>
            <div className={styles.queueBodyChoose}>
              {timeOptions.map((time, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeClick(time)}
                  className={selectedTime === time ? styles.selectedTime : ''}>
                  {time}
                </button>
              ))}
            </div>
            <Button
              type="primary"
              onClick={handleConfirm}
              style={{ padding: 4, margin: 'auto' }}
              disabled={!selectedTime}>
              Подтвердить
            </Button>
          </>
        ) : (
          <p>Извините, отделение не работает в данный момент.</p>
        )}
      </div>
    </Modal>
  );
}
