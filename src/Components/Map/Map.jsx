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

  const [searchCoordinates, setSearchCoordinates] = useState(null);

  const handleGeolocationSuccess = (geolocation) => {
    console.log('geo');
    console.log(geolocation.position);
    setMapState({
      center: geolocation.position,
      zoom: 15,
    });
  };

  const handleSearchResult = (result) => {
    const coordinates = result.geoObjects.get(0).geometry.getCoordinates();
    setSearchCoordinates(coordinates);
  };

  const currentCoordinates = searchCoordinates || mapState.center;

  return (
    <>
      <div className={styles.MapContainer}>
        <YMaps query={{ apikey: apiKey, lang: 'ru_RU' }} style={{ borderRadius: '1000px' }}>
          <Map state={mapState} width={'60vw'} height={'60vh'}>
            <GeolocationControl
              options={{ float: 'right', size: 'auto' }}
              onSuccess={handleGeolocationSuccess}
              onError={(error) => console.error('Error getting geolocation:', error)}
            />

            <ZoomControl options={{ float: 'right', size: 'auto' }} />
            <div className={styles.search}>
              <SearchControl />
            </div>

            <Marks curDot={currentCoordinates} />
          </Map>
        </YMaps>
      </div>
    </>
  );
}
