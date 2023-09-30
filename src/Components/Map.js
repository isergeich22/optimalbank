import React from "react";
import { YMaps, Map, SearchControl } from "@pbe/react-yandex-maps"
import Marks from "./Subcomponents/Marks";

export default function MapBlock() {

    return(

        <>
            <YMaps>
                <div className="map-block">
                    <Map defaultState={{ center: [55.75, 37.57], zoom: 9}} width={"100vw"} height={"94vh"}>
                        <SearchControl options={{float: "right"}}/>

                                <Marks/>

                    </Map>
                </div>
            </YMaps>
        </>

    )

}