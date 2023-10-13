import React from 'react';
import MapBlock from '../Components/Map/Map';
import Header from '../Components/Header';
import Popup from '../Components/Subcomponents/Popup';

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <MapBlock />
        <div
          style={{
            backgroundColor: 'white',
            width: '20%',
            height: '100%',
            overflow: 'auto',
            padding: '20px',
            position: 'relative',
          }}>
          <Popup />
        </div>
      </div>
    </>
  );
}
