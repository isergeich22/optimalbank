import React, { useState, useContext } from 'react';
import { PopupContext } from '../../App';
import styles from './Popup.module.css';
import Departments from '../../Data/departments.json';

const atms = [
  // Добавьте информацию о банкоматах
];
const departments = [];
Departments.branches.forEach((el) => {
  if (el.city === 'Москва') {
    departments.push(el);
  }
});

export default function Popup() {
  const { selectedItem, setSelectedItem } = useContext(PopupContext);
  const [activeTab, setActiveTab] = useState('departments');

  const vars = {
    departments: (
      <>
        {departments.map((item) => (
          <div key={item.id}>
            <h3>{item.shortName}</h3>
            <p>{item.address}</p>
            <p>{item.scheduleFl}</p>
          </div>
        ))}
      </>
    ),
    atms: (
      <>
        {atms.map((item) => (
          <div key={item.id}>
            {/* Вставьте здесь код для отображения информации о банкоматах */}
          </div>
        ))}
      </>
    ),
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedItem(null); // Сбросить выбранный элемент при смене вкладки
  };

  const handleFilterButtonClick = () => {
    // Добавьте здесь логику для фильтрации списка отделений или банкоматов
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <button
          className={`${styles.tabButton} ${activeTab === 'departments' ? styles.activeTab : ''}`}
          onClick={() => handleTabChange('departments')}>
          Отделения
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'atms' ? styles.activeTab : ''}`}
          onClick={() => handleTabChange('atms')}>
          Банкоматы
        </button>
        <button className={styles.filterButton} onClick={handleFilterButtonClick}>
          Фильтры
        </button>
      </div>
      {selectedItem ? (
        <div className={styles.container}>
          <h3>{selectedItem.shortName}</h3>
          <p>{selectedItem.address}</p>
          <p>{selectedItem.scheduleFl}</p>
          <button onClick={() => setSelectedItem(null)}>Close</button>
        </div>
      ) : (
        vars[activeTab]
      )}
      <button onClick={() => setSelectedItem(null)}>Close</button>
    </div>
  );
}
