import React from "react";
import Departments from "../../Data/departments.json"
import { Placemark } from "@pbe/react-yandex-maps";

const marks = []

Departments.branches.forEach(el => {
        if(el.city === 'Москва') {
                marks.push(el)
        }
})

marks.map(item => (

        console.log(item.coordinates)

))

export default function Marks() {

        return(                

                marks.map(item => (


                        <Placemark key={item.Biskvit_id} geometry={[item.coordinates.latitude, item.coordinates.longitude]}/>

                ))

        )

}    
