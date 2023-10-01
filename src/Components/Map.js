import React from "react";
import { YMaps, Map, SearchControl, GeolocationControl } from "@pbe/react-yandex-maps"
import Marks from "./Subcomponents/Marks";
export default function MapBlock() {

    return(

        <>
            <YMaps query={{apikey: '2d3deabb-4236-45c3-a61b-b92127f41286', lang: 'en_RU'}}>
                <div className="map-block">
                    <Map defaultState={{ center: [55.75, 37.57], zoom: 9}} width={"100vw"} height={"94vh"}>
                        <GeolocationControl />
                        <SearchControl options={{float: "right"}}/>
                                
                                <Marks/>

                    </Map>
                </div>
            </YMaps>
        </>

    )

}