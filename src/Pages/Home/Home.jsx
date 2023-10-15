import React, { useState } from 'react';

import Header from '../../Components/Header/Header';
import SearchParams from '../../Components/SearchParams/SearchParams';
import MapBlock from '../../Components/Map/Map';

import Title from '../../Components/Title/Title';

import DepartmentsModal from '../../Components/DepartmentsModal/DepartmentsModal';
import QueueModal from '../../Components/QueueModal/QueueModal';
export default function Home() {
  const [curModal, setCurModal] = useState('base');

  const label = 'Поиск отделения / банкомата';
  const sublabel = '';
  const handleChangeModal = (value) => {
    setCurModal(value);
  };
  return (
    <>
      <Header />
      <QueueModal />
      <SearchParams curModal={curModal} onChangeModal={handleChangeModal} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '5vh',
          gap: '9px',
          marginBottom: '5vh',
        }}>
        <DepartmentsModal curModal={curModal} onChangeModal={handleChangeModal} />
        <MapBlock />
      </div>
    </>
  );
}
