import React, { useState, createContext, useContext } from 'react';
import Departments from '../../Data/departments.json';
import { Placemark } from '@pbe/react-yandex-maps';
import { PopupContext } from '../../App';

const marks = [];

Departments.branches.forEach((el) => {
  if (el.city === 'Москва') {
    marks.push(el);
  }
});

export default function Marks() {
  const { selectedItem, setSelectedItem } = useContext(PopupContext);
  return (
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
    </>
  );
}
