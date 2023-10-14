import { Button } from 'antd';
import styles from './CurDepartment.module.css';
import { useContext } from 'react';
import { PopupContext } from '../../App';
import { CloseOutlined } from '@ant-design/icons';

const CurDepartment = () => {
  const { selectedItem, setSelectedItem } = useContext(PopupContext);
  function openYandexMaps(selectedItem) {
    const { shortName, address } = selectedItem;
    const url = `https://yandex.ru/maps/?text=${encodeURIComponent(shortName + ' ' + address)}`;
    window.open(url, '_blank');
  }
  return (
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

      <Button onClick={() => openYandexMaps(selectedItem)} type="primary">
        Открыть в Яндекс.Картах
      </Button>
    </div>
  );
};

export default CurDepartment;
