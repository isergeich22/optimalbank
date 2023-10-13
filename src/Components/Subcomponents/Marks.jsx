import React, { useState, createContext, useContext } from 'react';
import Departments from '../../Data/departments.json';
import { Placemark } from '@pbe/react-yandex-maps';

const marks = [];

Departments.branches.forEach((el) => {
  if (el.city === 'Москва') {
    marks.push(el);
  }
});

const PopupContext = createContext();

function Popup() {
  const { selectedItem, setSelectedItem } = useContext(PopupContext);

  if (!selectedItem) {
    return null;
  }

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, color: 'black' }}>
      <div
        style={{
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        }}>
        <h3>{selectedItem.shortName}</h3>
        <p>{selectedItem.address}</p>
        <p>{selectedItem.scheduleFl}</p>
        <button onClick={() => setSelectedItem(null)}>Close</button>
      </div>
    </div>
  );
}

export default function Marks() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <PopupContext.Provider value={{ selectedItem, setSelectedItem }}>
      <>
        {marks.map((item) => (
          <Placemark
            key={item.id}
            geometry={[item.coordinates.latitude, item.coordinates.longitude]}
            options={{
              iconLayout: 'default#image',
              iconImageSize: [32, 32],
              iconImageHref: '/icon.png',
            }}
            onClick={() => setSelectedItem(item)}
          />
        ))}
        <Popup />
      </>
    </PopupContext.Provider>
  );
}
