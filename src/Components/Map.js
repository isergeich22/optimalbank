import React from "react";
import { YMaps, Map, SearchControl, Placemark } from "@pbe/react-yandex-maps"
import Departments from "../Data/departments.json"

const departments = Departments

export default function MapBlock() {

    return(

        <>
            <YMaps>
                <div className="map-block">
                    <Map defaultState={{ center: [55.75, 37.57], zoom: 9}} width={"100vw"} height={"94vh"}>
                        <SearchControl options={{float: "right"}}/>
                        
                        
                        
                            <Placemark geometry={departments[0].depCoords}/>
                            <Placemark geometry={departments[1].depCoords}/>
                            <Placemark geometry={departments[2].depCoords}/>
                        
                        

                    </Map>
                </div>
            </YMaps>
        </>

    )

}