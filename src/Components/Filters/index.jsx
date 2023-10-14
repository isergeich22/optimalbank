import React from 'react';
import { Checkbox, Button, Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './Filters.module.css';
import { useFormik } from 'formik';

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

const Filters = ({ isOpen, onClose }) => {
  const formik = useFormik({
    initialValues: {
      selectedOptions: [],
    },
    onSubmit: (values) => {
      console.log('Selected Options:', values.selectedOptions);
      onClose(false);
    },
  });

  return (
    <Modal
      title="Параметры поиска"
      open={isOpen}
      onCancel={() => onClose(false)}
      footer={[
        <Button key="submit" type="primary" onClick={formik.handleSubmit}>
          Применить
        </Button>,
        <Button key="back" onClick={() => onClose(false)}>
          Закрыть
        </Button>,
      ]}>
      <div className={styles.cardBody}>
        <form>
          <ul className={styles.parametersList}>
            {parameters.map((parameter) => (
              <li key={parameter.id} className={styles.parameter}>
                <Checkbox
                  checked={formik.values.selectedOptions.includes(parameter.label)}
                  onChange={() => {
                    formik.setFieldValue(
                      'selectedOptions',
                      formik.values.selectedOptions.includes(parameter.label)
                        ? formik.values.selectedOptions.filter(
                            (option) => option !== parameter.label,
                          )
                        : [...formik.values.selectedOptions, parameter.label],
                    );
                  }}>
                  {parameter.label}
                </Checkbox>
                {formik.values.selectedOptions.includes(parameter.label) && (
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
        </form>
      </div>
    </Modal>
  );
};

export default Filters;
