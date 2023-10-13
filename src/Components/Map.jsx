import React, { createContext, useState } from 'react';
import { YMaps, Map, SearchControl, GeolocationControl, ZoomControl } from '@pbe/react-yandex-maps';
import Marks from './Subcomponents/Marks';
import Popup from './Subcomponents/Popup';
export const PopupContext = createContext();
export default function MapBlock() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <PopupContext.Provider value={{ selectedItem, setSelectedItem }}>
      <section style={{ display: 'flex', position: 'relative' }}>
        <YMaps query={{ apikey: '2d3deabb-4236-45c3-a61b-b92127f41286', lang: 'ru_RU' }}>
          <div className="map-block">
            <Map
              defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
              width={'60vw'}
              height={'50vh'}>
              <GeolocationControl />
              <ZoomControl options={{ float: 'right', size: 'auto' }} />
              <SearchControl options={{ float: 'right', size: 'medium' }} />

              <Marks />
            </Map>
          </div>
        </YMaps>
        <div
          style={{
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          }}>
          <Popup />
        </div>
      </section>
    </PopupContext.Provider>
  );
}
