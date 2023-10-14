import { Button } from 'antd';
import styles from './CurDepartment.module.css';
import { useContext, useState } from 'react';
import { PopupContext } from '../../App';
import { CloseOutlined } from '@ant-design/icons';
import QueueModal from '../QueueModal/QueueModal';

const CurDepartment = () => {
  const { selectedItem, setSelectedItem } = useContext(PopupContext);
  const [openTime, setOpenTime] = useState(false);
  function openYandexMaps(selectedItem) {
    const { shortName, address } = selectedItem;
    const url = `https://yandex.ru/maps/?text=${encodeURIComponent(shortName + ' ' + address)}`;
    window.open(url, '_blank');
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>{selectedItem.shortName}</h3>
          <CloseOutlined
            onClick={() => setSelectedItem(null)}
            style={{ width: '50px', height: '50px' }}
          />
        </div>
        <p>{selectedItem.address}</p>
        <div className={styles.schedule}>
          <h4>Режим работы</h4>
          <p>{selectedItem.scheduleFl}</p>
        </div>

        <Button
          onClick={() => openYandexMaps(selectedItem)}
          type="primary"
          style={{ marginBottom: '2vh' }}>
          Открыть в Яндекс.Картах
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setOpenTime(true);
          }}>
          Записаться в очередь
        </Button>
      </div>
      <QueueModal workingTime={selectedItem.scheduleFl} isOpen={openTime} setIsOpen={setOpenTime} />
    </>
  );
};

export default CurDepartment;
