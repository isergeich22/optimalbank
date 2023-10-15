import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Placemark } from '@pbe/react-yandex-maps';
import { PopupContext } from '../../App';
import departmentStore from '../../store/DepartmentsStore';
import useFetchDepartments from '../../hooks/FetchDepartments';

const Marks = observer(() => {
  const { setSelectedItem } = useContext(PopupContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const departmentsData = await useFetchDepartments();
        departmentStore.setDepartments(departmentsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {}, [departmentStore.departments.length]);

  return (
    <>
      {departmentStore.departments.map((item) => (
        <Placemark
          key={item.id}
          geometry={[item.coordinates.latitude, item.coordinates.longitude]}
          options={{
            iconLayout: 'default#image',
            iconImageSize: [32, 32],
            iconImageHref: `/icon.png`,
          }}
          onClick={() => setSelectedItem(item)}
        />
      ))}
    </>
  );
});

export default Marks;
