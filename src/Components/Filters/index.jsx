import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import styles from './Filters.module.css';
import closeImage from '../../assets/close.png';
const parameters = [
  {
    id: 1,
    label: 'Кредиты',
    options: [
      'Ипотечные кредиты (консультирование)',
      'Ипотечные кредиты (оформление, выдача)',
      'Потребительские кредиты (консультирование, прием документов)',
      'Потребительские кредиты (оформление, выдача)',
      'Автокредиты (оформление, выдача)',
      'Военная ипотека (оформление, выдача)',
      'Образовательный кредит (оформление, выдача)',
    ],
  },
  {
    id: 2,
    label: 'Платежи',
    options: ['Платежи в пользу ЮЛ', 'Аккредитивы', 'Эскроу-счет'],
  },
  {
    id: 3,
    label: 'Другие услуги',
    options: [
      'Открытие УДБО',
      'Операции, связанные с обслуживанием госпрограмм (ГЖС)',
      'Операции, связанные с обслуживанием региональных программ (субсидии)',
      'Страхование',
      'Операции с наличной иностранной валютой',
      'Специальные избирательные счета кандидатов',
    ],
  },
  {
    id: 4,
    label: 'Вклады, металлы, сейфы',
    options: [
      'Сберегательные сертификаты банка',
      'Монеты из драгоценных металлов (покупка)',
      'Монеты из драгоценных металлов (продажа)',
      'Обезличенные металлические счета',
      'Драгоценные металлы в слитках (покупка)',
      'Драгоценные металлы в слитках (продажа)',
      'Предоставление в аренду индивидуальных сейфов',
    ],
  },
  {
    id: 5,
    label: 'Специальные возможности',
    options: [
      'Регистрация биометрии в Единую биометрическую систему',
      'Перевод на русский жестовый язык',
      'Обслуживание инвалидов по зрению',
      'Есть пандус',
      'Выплаты вкладчикам банка, в отношении которого произошел страховой случай (АСВ)',
    ],
  },
];

const Filters = ({ curModal, onChangeModal }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Card className={styles.card}>
      <Card.Header className={styles.cardHeader}>
        <h2 className={styles.heading}>Параметры поиска</h2>
        <Button
          variant="dark"
          onClick={() => onChangeModal(curModal === 'filters' ? 'base' : 'filters')}
          className={styles.closeButton}>
          <img src={closeImage} alt="come back btn" width={50} height={50} />
        </Button>
      </Card.Header>
      <Card.Body className={styles.cardBody}>
        <ul className={styles.parametersList}>
          {parameters.map((parameter) => (
            <li key={parameter.id} className={styles.parameter}>
              <input
                type="checkbox"
                id={parameter.id}
                checked={selectedOption === parameter.label}
                onChange={() => handleOptionChange(parameter.label)}
                className={styles.checkbox}
              />
              <label htmlFor={parameter.id} className={styles.label}>
                {parameter.label}
              </label>
              {selectedOption === parameter.label && (
                <ul className={styles.subOptionsList}>
                  {parameter.options.map((option) => (
                    <li key={option} className={styles.subOption}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Filters;
