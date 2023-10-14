import React, { useState, useContext } from 'react';
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
  const { selectedItem, setSelectedItem } = useContext(PopupContext);
  const [activeTab, setActiveTab] = useState('departments');
  const [isOpenFilters, setIsOpenFilters] = useState(false);

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
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedItem(null);
  };

  return (
    <div className={styles.container}>
      {selectedItem ? (
        <CurDepartment />
      ) : curModal === 'filters' ? (
        <Filters isOpen={isOpenFilters} onClose={handleFiltersOpening} />
      ) : (
        <>
          <div className={styles.tabsContainer}>
            <button
              className={`${styles.tabButton} ${
                activeTab === 'departments' ? styles.activeTab : ''
              }`}
              onClick={() => handleTabChange('departments')}>
              Отделения
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'atms' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('atms')}>
              Банкоматы
            </button>
            <button
              className={styles.filterButton}
              onClick={() => {
                onChangeModal(curModal === 'filters' ? 'base' : 'filters');
                setSelectedItem(null);
                setIsOpenFilters(true);
              }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="vuesax/linear/setting-4">
                  <g id="setting-4">
                    <path
                      id="Vector"
                      d="M30.9077 9.33691H22.5562"
                      stroke="#2F67E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M8.63702 9.33691H3.06934"
                      stroke="#2F67E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M14.2047 14.2175C16.8953 14.2175 19.0765 12.0321 19.0765 9.33628C19.0765 6.64047 16.8953 4.45508 14.2047 4.45508C11.5142 4.45508 9.33301 6.64047 9.33301 9.33628C9.33301 12.0321 11.5142 14.2175 14.2047 14.2175Z"
                      stroke="#2F67E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M30.908 24.6777H25.3403"
                      stroke="#2F67E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_5"
                      d="M11.4209 24.6777H3.06934"
                      stroke="#2F67E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_6"
                      d="M19.7726 29.5583C22.4632 29.5583 24.6443 27.3729 24.6443 24.6771C24.6443 21.9813 22.4632 19.7959 19.7726 19.7959C17.082 19.7959 14.9009 21.9813 14.9009 24.6771C14.9009 27.3729 17.082 29.5583 19.7726 29.5583Z"
                      stroke="#2F67E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className={styles.cards}>{vars[activeTab]}</div>
        </>
      )}
    </div>
  );
}
