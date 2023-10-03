import React from "react";
import { YMaps, Map, SearchControl, GeolocationControl, ZoomControl } from "@pbe/react-yandex-maps"
import Marks from "./Subcomponents/Marks";


export default function MapBlock() {

    return(

        <>
            <YMaps query={{apikey: '2d3deabb-4236-45c3-a61b-b92127f41286', lang: 'ru_RU'}}>
                <div className="map-block">
                    <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }} width={"100vw"} height={"94vh"}>
                        <GeolocationControl />
                        <ZoomControl options={{float: "right", size: "auto"}}/>
                        <SearchControl options={{float: "right", size: "medium"}}/>
                        
                                <Marks />

                    </Map>
                </div>
            </YMaps>
        </>

    )

}