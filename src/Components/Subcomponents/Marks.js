import React from "react";
import Departments from "../../Data/departments.json"
import { Placemark } from "@pbe/react-yandex-maps";
import { useModal } from "../Context/ModalContext";

const marks = []

Departments.branches.forEach(el => {
        if(el.city === 'Москва') {
                marks.push(el)
        }
})

export default function Marks() {

        const toggle = useModal()

        return(                

                marks.map(item => (

                                <Placemark 
                                        onClick={toggle}
                                        options={{iconLayout: "default#image", iconImageSize: [32, 32], iconImageHref: "/icon.png"}} 
                                        key={item.Biskvit_id} 
                                        geometry={[item.coordinates.latitude, item.coordinates.longitude]} 
                                />                                

                ))
        )

}    
