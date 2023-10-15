import React, { useEffect, useState, useContext } from 'react';
import { Checkbox, Button, Modal, Input } from 'antd';
import departmentStore from '../../store/DepartmentsStore';
import { observer } from 'mobx-react-lite';
import styles from './Filters.module.css';
import { useFormik } from 'formik';
import useDepartmentsByParams from '../../hooks/useDepartmentsByParams';
import { PopupContext } from '../../App';

const Filters = observer(({ isOpen, onClose }) => {
  const [departmentCities, setDepartmentCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [departmentFlSchedules, setDepartmentFlSchedules] = useState([]);
  const [departmentJurLSchedules, setDepartmentJurLSchedules] = useState([]);
  const { params, setParams } = useContext(PopupContext);
  useEffect(() => {
    const replaceDotsInTime = (str) => {
      return str.replace(/(\d{2})\.(\d{2})/g, '$1:$2');
    };

    const uniqueCities = Array.from(
      new Set(
        departmentStore.departments.map((department) => department.city.toLowerCase().trim()),
      ),
    ).slice(0, 20); // Ограничиваем до 20 городов

    const uniqueFlSchedules = [
      'пн-пт: 10:00-19:00 сб, вс: выходной',
      'пн-пт: 10:00-20:00 сб, вс: выходной',
    ];
    const uniqueJurLSchedules = [
      'пн-пт: 09:00-18:00 сб, вс: выходной',
      'пн-пт: 09:00-20:00 сб, вс: выходной',
    ];

    setDepartmentCities(uniqueCities);
    setDepartmentFlSchedules(uniqueFlSchedules);
    setDepartmentJurLSchedules(uniqueJurLSchedules);
  }, []);

  const formik = useFormik({
    initialValues: {
      selectedOptions: [],
    },
    onSubmit: (values) => {
      console.log('Selected Options:', values.selectedOptions);
      setParams(values.selectedOptions);
      departmentStore.setDepartments(departmentStore.departments, useDepartmentsByParams(params));
      onClose(false);
    },
  });

  const handleCitySearch = (e) => {
    setSelectedCity(e.target.value.toLowerCase().trim());
  };

  const handleCityCheckboxChange = (city) => {
    const selectedOptions = formik.values.selectedOptions;

    if (selectedOptions.includes(city)) {
      formik.setFieldValue(
        'selectedOptions',
        selectedOptions.filter((item) => item !== city),
      );
    } else {
      formik.setFieldValue('selectedOptions', [...selectedOptions, city]);
    }
  };

  const parameters = [
    {
      id: 1,
      label: 'Режим работы (Физические лица)',
      options: departmentFlSchedules.map((schedule) => (
        <Checkbox
          key={schedule}
          checked={formik.values.selectedOptions.includes(schedule)}
          onChange={() => handleCityCheckboxChange(schedule)}>
          {schedule}
        </Checkbox>
      )),
    },
    {
      id: 2,
      label: 'Режим работы (Юридические лица)',
      options: departmentJurLSchedules.map((schedule) => (
        <Checkbox
          key={schedule}
          checked={formik.values.selectedOptions.includes(schedule)}
          onChange={() => handleCityCheckboxChange(schedule)}>
          {schedule}
        </Checkbox>
      )),
    },
    {
      id: 3,
      label: 'Специальные возможности',
      options: [
        'VIP Зона ',
        'VIP Офис ',
        'Пандус ',
        'Обслуживание инвалидов по зрению ',
        'Обслуживание юридических лиц ',
        'Prime ',
      ].map((special) => (
        <Checkbox
          key={special}
          checked={formik.values.selectedOptions.includes(special)}
          onChange={() => handleCityCheckboxChange(special)}>
          {special}
        </Checkbox>
      )),
    },
  ];

  return (
    <Modal
      title="Услуги банка ВТБ"
      open={isOpen}
      onCancel={() => onClose(false)}
      footer={null}
      centered // Центрировать модалку
      style={{ maxHeight: '80vh', overflowY: 'auto', minWidth: '40vw' }}>
      <div className={styles.cardBody}>
        <form>
          <div className={styles.columnWrapper}>
            {parameters.map((parameter) => (
              <div key={parameter.id} className={styles.category}>
                <h2>{parameter.label}</h2>
                {parameter.id === 0 && ( // Показываем поле ввода для поиска города
                  <Input
                    placeholder="Начните вводить чтобы увидеть больше"
                    value={selectedCity}
                    onChange={handleCitySearch}
                  />
                )}
                <ul className={styles.subOptionsList}>{parameter.options}</ul>
              </div>
            ))}
          </div>
          <div className={styles.submitContainer}>
            <Button onClick={formik.handleSubmit} type="primary">
              Применить
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
});

export default Filters;
