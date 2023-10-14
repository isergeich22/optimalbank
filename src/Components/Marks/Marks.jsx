import React, { useState, createContext, useContext, useEffect } from 'react';
import Departments from '../../Data/departments.json';
import { Placemark } from '@pbe/react-yandex-maps';
import { PopupContext } from '../../App';
import useFetchDepartments from '../../hooks/useFetchDepartments';
/*
let marks = [];

Departments.branches.forEach((el) => {
  if (el.city === 'Москва') {
    marks.push(el);
  }
});
*/
export default function Marks() {
  const { selectedItem, setSelectedItem } = useContext(PopupContext);
  const [marks, setMarks] = useState([]);
  useEffect(() => {
    (async () => {
      console.log('fetching');
      try {
        const departmentsData = await useFetchDepartments();
        console.log(departmentsData);
        setMarks(departmentsData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
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
