import React, { useEffect, useState } from 'react';
import Departments from '../../Data/departments.json';
import { Placemark } from '@pbe/react-yandex-maps';

const marks = [];

Departments.branches.forEach((el) => {
  if (el.city === 'Москва') {
    marks.push(el);
  }
});

function getDepInfo(item) {
  let content = `
                <div className="modal-header bg-dark"><h1>${item.shortName}</h1></div>
                <div className="modal-body bg-dark"><p>${item.address}</p></div>
                <div className="modal-footer bg-dark"><button type="button" className="btn btn-primary">Save changes</button></div>
        `;

  document.querySelector('.modal-content').innerHTML = content;
}

export default function Marks() {
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    if (modalState === true) {
      document.querySelector('.modal').style.display = 'block';
    }

    if (modalState === false) {
      document.querySelector('.modal').style.display = 'none';
    }
  }, [modalState]);

  return marks.map((item) => (
    <Placemark
      onClick={() => {
        if (modalState) {
          setModalState(false);
        } else {
          setModalState(true);
          getDepInfo(item);
        }
      }}
      options={{ iconLayout: 'default#image', iconImageSize: [32, 32], iconImageHref: '/icon.png' }}
      key={item.Biskvit_id}
      geometry={[item.coordinates.latitude, item.coordinates.longitude]}
    />
  ));
}
