import React from "react";
import Departments from "../../Data/departments.json"
import { Placemark } from "@pbe/react-yandex-maps";

const marks = []

Departments.branches.forEach(el => {
        if(el.city === 'Москва') {
                marks.push(el)
        }
})

export default function Marks() {

        // const [state, setState] = useState([])

        return(                

                marks.map(item => (

                        
                        <Placemark onClick={() => {console.log([item.coordinates.latitude, item.coordinates.longitude])} } options={{iconColor: "red"}} key={item.Biskvit_id} geometry={[item.coordinates.latitude, item.coordinates.longitude]}/>
                        

                ))

        )

}    
