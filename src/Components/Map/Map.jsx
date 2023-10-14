import React, { createContext, useState } from 'react';
import { YMaps, Map, SearchControl, GeolocationControl, ZoomControl } from '@pbe/react-yandex-maps';

import styles from './Map.module.css';
import Marks from '../Marks/Marks';

const apiKey = import.meta.env.API_KEY || '2d3deabb-4236-45c3-a61b-b92127f41286';

export default function MapBlock() {
  const [mapState, setMapState] = useState({
    center: [55.751574, 37.573856],
    zoom: 9,
  });

  const handleGeolocationSuccess = (geolocation) => {
    console.log('geo');
    console.log(geolocation.position);
    setMapState({
      center: geolocation.position,
      zoom: 15,
    });
  };

  return (
    <>
      <div className={styles.MapContainer}>
        <YMaps query={{ apikey: apiKey, lang: 'ru_RU' }} style={{ borderRadius: '1000px' }}>
          <Map
            state={mapState} // Подключаем состояние карты
            width={'60vw'}
            height={'60vh'}>
            <GeolocationControl
              options={{ float: 'right', size: 'auto' }}
              onSuccess={handleGeolocationSuccess}
              onError={(error) => console.error('Error getting geolocation:', error)}
            />

            <ZoomControl options={{ float: 'right', size: 'auto' }} />
            <SearchControl options={{ float: 'right', size: 'medium' }} />

            <Marks />
          </Map>
        </YMaps>
      </div>
    </>
  );
}
