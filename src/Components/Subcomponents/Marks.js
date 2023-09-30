import React from "react";
import Departments from "../../Data/departments.json"
import { Placemark } from "@pbe/react-yandex-maps";

const marks = Departments   

export default function Marks() {        

        return(

                marks.map(item => (

                    <Placemark key={item.id} geometry={item.depCoords}/>

                ))           

        )

}    
