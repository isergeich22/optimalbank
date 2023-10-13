import React, { createContext, useState } from 'react';
import { YMaps, Map, SearchControl, GeolocationControl, ZoomControl } from '@pbe/react-yandex-maps';
import Marks from '../Subcomponents/Marks';
import styles from './Map.module.css';

const apiKey = import.meta.env.VITE_API_KEY;

export default function MapBlock() {
  return (
    <>
      <div className={styles.MapContainer}>
        <YMaps query={{ apikey: apiKey, lang: 'ru_RU' }}>
          <Map
            defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
            width={'60vw'}
            height={'80vh'}>
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
