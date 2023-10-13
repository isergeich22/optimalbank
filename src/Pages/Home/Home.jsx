import React, { useState } from 'react';

import Header from '../../Components/Header/Header';
import MapBlock from '../../Components/Map/Map';

import Title from '../../Components/Title/Title';

import DepartmentsModal from '../../Components/DepartmentsModal/DepartmentsModal';
export default function Home() {
  const [curModal, setCurModal] = useState('base');
  const label = 'Давай уточним параметры поиска';
  const sublabel = 'Так я найду самый оптимальный вариант для тебя! Жми сюда...';
  const handleChangeModal = (value) => {
    setCurModal(value);
  };
  return (
    <>
      <Header />
      <Title label={label} sublabel={sublabel} />
      <div style={{ display: 'flex', marginTop: '15vh', gap: '9px' }}>
        <MapBlock />

        <DepartmentsModal curModal={curModal} onChangeModal={handleChangeModal} />
      </div>
    </>
  );
}