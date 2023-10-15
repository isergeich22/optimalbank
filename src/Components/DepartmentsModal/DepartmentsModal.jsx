import React, { useState, useEffect, useContext } from 'react';
import { PopupContext } from '../../App';
import styles from './DepartmentsModal.module.css';
import Departments from '../../Data/departments.json';

import Filters from '../Filters';

import CurDepartment from '../CurDeparment';

const atms = [
  // Добавьте информацию о банкоматах
  {
    id: 1,
    shortName: '124535R',
    address: 'Свердловская область, г. Асбест, ул. Ленинградская, д. 20',
  },
];
const departments = Departments.branches.filter((el) => el.city === 'Москва');

export default function DepartmentsModal({ curModal, onChangeModal }) {
  const { selectedItem, setSelectedItem, activeTab, setActiveTab } = useContext(PopupContext);

  const [isOpenFilters, setIsOpenFilters] = useState(false);
  useEffect(() => {
    if (curModal === 'filters') {
      setIsOpenFilters(true);
    }
  }, [curModal]);
  const handleFiltersOpening = (value) => {
    setIsOpenFilters(value);

    // Если модальное окно с фильтрами закрыто, сбрасываем состояние активной вкладки и выбранного элемента
    if (!value) {
      onChangeModal(curModal === 'filters' ? 'base' : 'filters');
      setSelectedItem(null);
    }
  };
  const vars = {
    departments: (
      <>
        {departments.map((item) => (
          <div className={styles.card} key={item.id} onClick={() => setSelectedItem(item)}>
            <img src="/icon.png" alt="bank logo" width={32} height={32} />
            <div>
              <p>{item.address}</p>
            </div>
          </div>
        ))}
      </>
    ),
    atms: (
      <>
        {atms.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3>{item.shortName}</h3>
            <p>{item.address}</p>
          </div>
        ))}
      </>
    ),
    filters: (
      <>
        {departments.map((item) => (
          <div className={styles.card} key={item.id} onClick={() => setSelectedItem(item)}>
            <img src="/icon.png" alt="bank logo" width={32} height={32} />
            <div>
              <p>{item.address}</p>
            </div>
          </div>
        ))}
      </>
    ),
  };

  return (
    <div className={styles.container}>
      {selectedItem ? (
        <CurDepartment />
      ) : (
        <>
          {curModal === 'filters' && (
            <Filters isOpen={isOpenFilters} onClose={handleFiltersOpening} />
          )}

          <div className={styles.cards}>{vars[activeTab]}</div>
        </>
      )}
    </div>
  );
}
