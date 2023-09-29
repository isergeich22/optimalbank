import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps"

export default function MapBlock() {

    return(

        <>
            <YMaps>
                <div className="map-block">
                    <Map defaultState={{ center: [55.75, 37.57], zoom: 9}} width={"100vw"} height={"100vh"}/>
                </div>
            </YMaps>
        </>

    )

}