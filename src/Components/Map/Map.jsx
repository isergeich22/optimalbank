import React, { createContext, useState } from 'react';
import { YMaps, Map, SearchControl, GeolocationControl, ZoomControl } from '@pbe/react-yandex-maps';

import styles from './Map.module.css';
import Marks from '../Marks/Marks';

const apiKey = import.meta.env.VITE_API_KEY;

export default function MapBlock() {
  return (
    <>
      <div className={styles.MapContainer}>
        <YMaps query={{ apikey: apiKey, lang: 'ru_RU' }} style={{ borderRadius: '1000px' }}>
          <Map
            defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
            width={'60vw'}
            height={'60vh'}>
            <GeolocationControl />
            <ZoomControl options={{ float: 'right', size: 'auto' }} />
            <SearchControl options={{ float: 'right', size: 'medium' }} />

            <Marks />
          </Map>
        </YMaps>
      </div>
    </>
  );
}
