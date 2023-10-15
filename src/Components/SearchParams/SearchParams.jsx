import React, { useContext, useState } from 'react';
import styles from './SearchParams.module.css';
import { Form } from 'react-bootstrap';
import { PopupContext } from '../../App';
import Filters from '../Filters';
import useFetchDepartments from '../../hooks/useFetchDepartments';
import departmentStore from '../../store/DepartmentsStore';

export default function SearchParams({ curModal, onChangeModal }) {
  const { selectedItem, setSelectedItem, activeTab, setActiveTab, params, setParams } =
    useContext(PopupContext);
  const [radioChecked, setRadioChecked] = useState('');

  const resetDepartments = () => {
    (async () => {
      try {
        const departmentsData = await useFetchDepartments();
        departmentStore.setDepartments(departmentsData);
      } catch (error) {
        console.error(error);
      }
    })();
    setParams([]);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedItem(null);
  };
  const handleRadioChange = (e) => {
    setRadioChecked(e.target.value);
  };
  return (
    <section className={styles.searchBlock}>
      <div className={styles.searchBlock__control}>
        <h1 className={styles.searchBlock__control__header}>Поиск отделения / банкомата</h1>
        <div className={styles.searchBlock__control__choose}>
          <button
            className={activeTab === 'departments' && styles.active}
            onClick={() => handleTabChange('departments')}>
            Найти отделение
          </button>
          <button
            className={activeTab === 'atms' && styles.active}
            onClick={() => handleTabChange('atms')}>
            Найти банкомат
          </button>
        </div>
        <div className={styles.searchBlock__control__filters}>
          <ul>
            <li>
              <Form.Check
                type="radio"
                label="Физические лица"
                id={`default-radio-1`}
                value="Физические лица"
                checked={radioChecked === 'Физические лица'}
                onChange={handleRadioChange}
              />
            </li>
            <li>
              <Form.Check
                type="radio"
                label="Юридические лица"
                id={`default-radio-2`}
                value="Юридические лица"
                checked={radioChecked === 'Юридические лица'}
                onChange={handleRadioChange}
              />
            </li>
            <li>
              <Form.Check
                type="radio"
                label="Привилегия"
                id={`default-radio-3`}
                value="Привилегия"
                checked={radioChecked === 'Привилегия'}
                onChange={handleRadioChange}
              />
            </li>
            <li>
              <Form.Check
                type="radio"
                label="Работает 24 часа"
                id={`default-radio-4`}
                value="Работает 24 часа"
                checked={radioChecked === 'Работает 24 часа'}
                onChange={handleRadioChange}
              />
            </li>
            <li>
              <Form.Check
                type="radio"
                label="Доступно для маломобильных граждан"
                id={`default-radio-5`}
                value="Доступно для маломобильных граждан"
                checked={radioChecked === 'Доступно для маломобильных граждан'}
                onChange={handleRadioChange}
              />
            </li>
            <li>
              <Form.Check
                type="radio"
                label="Прайм"
                id={`default-radio-6`}
                value="Прайм"
                checked={radioChecked === 'Прайм'}
                onChange={handleRadioChange}
              />
            </li>
            <li>
              <Form.Check
                type="radio"
                label="Работает в выходные"
                id={`default-radio-7`}
                value="Работает в выходные"
                checked={radioChecked === 'Работает в выходные'}
                onChange={handleRadioChange}
              />
            </li>
            <li style={{ width: 210 }}>
              {params.length ? (
                <button className={styles.filterButton} onClick={() => resetDepartments()}>
                  Сбросить фильтры
                </button>
              ) : (
                <button
                  className={styles.filterButton}
                  onClick={() => {
                    onChangeModal(curModal === 'filters' ? 'base' : 'filters');
                    setSelectedItem(null);
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
                          stroke="#7ED4FF"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_2"
                          d="M8.63702 9.33691H3.06934"
                          stroke="#7ED4FF"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_3"
                          d="M14.2047 14.2175C16.8953 14.2175 19.0765 12.0321 19.0765 9.33628C19.0765 6.64047 16.8953 4.45508 14.2047 4.45508C11.5142 4.45508 9.33301 6.64047 9.33301 9.33628C9.33301 12.0321 11.5142 14.2175 14.2047 14.2175Z"
                          stroke="#7ED4FF"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_4"
                          d="M30.908 24.6777H25.3403"
                          stroke="#7ED4FF"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_5"
                          d="M11.4209 24.6777H3.06934"
                          stroke="#7ED4FF"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_6"
                          d="M19.7726 29.5583C22.4632 29.5583 24.6443 27.3729 24.6443 24.6771C24.6443 21.9813 22.4632 19.7959 19.7726 19.7959C17.082 19.7959 14.9009 21.9813 14.9009 24.6771C14.9009 27.3729 17.082 29.5583 19.7726 29.5583Z"
                          stroke="#7ED4FF"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </svg>
                  Все услуги
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.searchBlock__legend}>
        <p className={styles.searchBlock__legend__title}>Степень загруженности отделений:</p>
        <ul className={styles.searchBlock__legend__list}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none">
              <circle cx="15" cy="15" r="15" fill="#0AD1AD" />
              <circle cx="15" cy="14.9727" r="12" fill="black" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.6324 12.6719H9.58747L10.4856 10.4531H22.4248L21.6324 12.6719ZM20.3645 16.211H8.31962L9.2177 13.9922H21.1569L20.3645 16.211ZM7.05176 19.8036H19.0967L19.8891 17.5848H7.94984L7.05176 19.8036Z"
                fill="white"
              />
              <path
                d="M9.58747 12.6719L9.53034 12.6488L9.49603 12.7336H9.58747V12.6719ZM21.6324 12.6719V12.7336H21.6758L21.6904 12.6927L21.6324 12.6719ZM10.4856 10.4531V10.3915H10.444L10.4284 10.43L10.4856 10.4531ZM22.4248 10.4531L22.4828 10.4739L22.5123 10.3915H22.4248V10.4531ZM8.31962 16.211L8.26248 16.1879L8.22818 16.2726H8.31962V16.211ZM20.3645 16.211V16.2726H20.408L20.4226 16.2317L20.3645 16.211ZM9.2177 13.9922V13.9306H9.17616L9.16057 13.9691L9.2177 13.9922ZM21.1569 13.9922L21.215 14.0129L21.2444 13.9306H21.1569V13.9922ZM19.0967 19.8036V19.8653H19.1401L19.1547 19.8243L19.0967 19.8036ZM7.05176 19.8036L6.99463 19.7805L6.96032 19.8653H7.05176V19.8036ZM19.8891 17.5848L19.9471 17.6056L19.9765 17.5232H19.8891V17.5848ZM7.94984 17.5848V17.5232H7.9083L7.89271 17.5617L7.94984 17.5848ZM9.58747 12.7336H21.6324V12.6103H9.58747V12.7336ZM10.4284 10.43L9.53034 12.6488L9.6446 12.695L10.5427 10.4762L10.4284 10.43ZM22.4248 10.3915H10.4856V10.5148H22.4248V10.3915ZM21.6904 12.6927L22.4828 10.4739L22.3668 10.4324L21.5743 12.6512L21.6904 12.6927ZM8.31962 16.2726H20.3645V16.1494H8.31962V16.2726ZM9.16057 13.9691L8.26248 16.1879L8.37675 16.2341L9.27483 14.0153L9.16057 13.9691ZM21.1569 13.9306H9.2177V14.0538H21.1569V13.9306ZM20.4226 16.2317L21.215 14.0129L21.0989 13.9715L20.3065 16.1903L20.4226 16.2317ZM19.0967 19.742H7.05176V19.8653H19.0967V19.742ZM19.831 17.5641L19.0386 19.7829L19.1547 19.8243L19.9471 17.6056L19.831 17.5641ZM7.94984 17.6465H19.8891V17.5232H7.94984V17.6465ZM7.10889 19.8267L8.00697 17.6079L7.89271 17.5617L6.99463 19.7805L7.10889 19.8267Z"
                fill="white"
              />
            </svg>
            Время ожидания в очереди около 10 мин.
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none">
              <circle cx="15" cy="15" r="15" fill="#F9A502" />
              <circle cx="15" cy="14.9727" r="12" fill="black" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.6324 12.6719H9.58747L10.4856 10.4531H22.4248L21.6324 12.6719ZM20.3645 16.211H8.31962L9.2177 13.9922H21.1569L20.3645 16.211ZM7.05176 19.8036H19.0967L19.8891 17.5848H7.94984L7.05176 19.8036Z"
                fill="white"
              />
              <path
                d="M9.58747 12.6719L9.53034 12.6488L9.49603 12.7336H9.58747V12.6719ZM21.6324 12.6719V12.7336H21.6758L21.6904 12.6927L21.6324 12.6719ZM10.4856 10.4531V10.3915H10.444L10.4284 10.43L10.4856 10.4531ZM22.4248 10.4531L22.4828 10.4739L22.5123 10.3915H22.4248V10.4531ZM8.31962 16.211L8.26248 16.1879L8.22818 16.2726H8.31962V16.211ZM20.3645 16.211V16.2726H20.408L20.4226 16.2317L20.3645 16.211ZM9.2177 13.9922V13.9306H9.17616L9.16057 13.9691L9.2177 13.9922ZM21.1569 13.9922L21.215 14.0129L21.2444 13.9306H21.1569V13.9922ZM19.0967 19.8036V19.8653H19.1401L19.1547 19.8243L19.0967 19.8036ZM7.05176 19.8036L6.99463 19.7805L6.96032 19.8653H7.05176V19.8036ZM19.8891 17.5848L19.9471 17.6056L19.9765 17.5232H19.8891V17.5848ZM7.94984 17.5848V17.5232H7.9083L7.89271 17.5617L7.94984 17.5848ZM9.58747 12.7336H21.6324V12.6103H9.58747V12.7336ZM10.4284 10.43L9.53034 12.6488L9.6446 12.695L10.5427 10.4762L10.4284 10.43ZM22.4248 10.3915H10.4856V10.5148H22.4248V10.3915ZM21.6904 12.6927L22.4828 10.4739L22.3668 10.4324L21.5743 12.6512L21.6904 12.6927ZM8.31962 16.2726H20.3645V16.1494H8.31962V16.2726ZM9.16057 13.9691L8.26248 16.1879L8.37675 16.2341L9.27483 14.0153L9.16057 13.9691ZM21.1569 13.9306H9.2177V14.0538H21.1569V13.9306ZM20.4226 16.2317L21.215 14.0129L21.0989 13.9715L20.3065 16.1903L20.4226 16.2317ZM19.0967 19.742H7.05176V19.8653H19.0967V19.742ZM19.831 17.5641L19.0386 19.7829L19.1547 19.8243L19.9471 17.6056L19.831 17.5641ZM7.94984 17.6465H19.8891V17.5232H7.94984V17.6465ZM7.10889 19.8267L8.00697 17.6079L7.89271 17.5617L6.99463 19.7805L7.10889 19.8267Z"
                fill="white"
              />
            </svg>
            Время ожидания в очереди около 20-25 мин.
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none">
              <circle cx="15" cy="15" r="15" fill="#FF1B0D" />
              <circle cx="15" cy="14.9727" r="12" fill="black" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.6324 12.6719H9.58747L10.4856 10.4531H22.4248L21.6324 12.6719ZM20.3645 16.211H8.31962L9.2177 13.9922H21.1569L20.3645 16.211ZM7.05176 19.8036H19.0967L19.8891 17.5848H7.94984L7.05176 19.8036Z"
                fill="white"
              />
              <path
                d="M9.58747 12.6719L9.53034 12.6488L9.49603 12.7336H9.58747V12.6719ZM21.6324 12.6719V12.7336H21.6758L21.6904 12.6927L21.6324 12.6719ZM10.4856 10.4531V10.3915H10.444L10.4284 10.43L10.4856 10.4531ZM22.4248 10.4531L22.4828 10.4739L22.5123 10.3915H22.4248V10.4531ZM8.31962 16.211L8.26248 16.1879L8.22818 16.2726H8.31962V16.211ZM20.3645 16.211V16.2726H20.408L20.4226 16.2317L20.3645 16.211ZM9.2177 13.9922V13.9306H9.17616L9.16057 13.9691L9.2177 13.9922ZM21.1569 13.9922L21.215 14.0129L21.2444 13.9306H21.1569V13.9922ZM19.0967 19.8036V19.8653H19.1401L19.1547 19.8243L19.0967 19.8036ZM7.05176 19.8036L6.99463 19.7805L6.96032 19.8653H7.05176V19.8036ZM19.8891 17.5848L19.9471 17.6056L19.9765 17.5232H19.8891V17.5848ZM7.94984 17.5848V17.5232H7.9083L7.89271 17.5617L7.94984 17.5848ZM9.58747 12.7336H21.6324V12.6103H9.58747V12.7336ZM10.4284 10.43L9.53034 12.6488L9.6446 12.695L10.5427 10.4762L10.4284 10.43ZM22.4248 10.3915H10.4856V10.5148H22.4248V10.3915ZM21.6904 12.6927L22.4828 10.4739L22.3668 10.4324L21.5743 12.6512L21.6904 12.6927ZM8.31962 16.2726H20.3645V16.1494H8.31962V16.2726ZM9.16057 13.9691L8.26248 16.1879L8.37675 16.2341L9.27483 14.0153L9.16057 13.9691ZM21.1569 13.9306H9.2177V14.0538H21.1569V13.9306ZM20.4226 16.2317L21.215 14.0129L21.0989 13.9715L20.3065 16.1903L20.4226 16.2317ZM19.0967 19.742H7.05176V19.8653H19.0967V19.742ZM19.831 17.5641L19.0386 19.7829L19.1547 19.8243L19.9471 17.6056L19.831 17.5641ZM7.94984 17.6465H19.8891V17.5232H7.94984V17.6465ZM7.10889 19.8267L8.00697 17.6079L7.89271 17.5617L6.99463 19.7805L7.10889 19.8267Z"
                fill="white"
              />
            </svg>
            Время ожидания в очереди около 35-40 мин.
          </li>
        </ul>
      </div>
    </section>
  );
}
