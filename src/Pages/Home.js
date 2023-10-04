import React from "react";
import MapBlock from "../Components/Map";
import Header from "../Components/Header";
import Window from "../Components/Subcomponents/Window";

export default function Home() {

    return(

        <React.Fragment>
            <Window />
            <Header />
            <MapBlock />
        </React.Fragment>

    )

}