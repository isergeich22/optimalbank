import React from 'react';

import Header from '../../Components/Header/Header';
import MapBlock from '../../Components/Map/Map';

import Title from '../../Components/Title/Title';
import Popup from '../../Components/Popup/Popup';
export default function Home() {
  const label = 'Давай уточним параметры поиска';
  const sublabel = 'Так я найду самый оптимальный вариант для тебя! Жми сюда...';
  return (
    <>
      <Header />
      <Title label={label} sublabel={sublabel} />
      <div style={{ display: 'flex', marginTop: '15vh', gap: '9px' }}>
        <MapBlock />

        <Popup />
      </div>
    </>
  );
}
