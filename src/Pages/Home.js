import React from "react";
import MapBlock from "../Components/Map";
import Header from "../Components/Header";
import Window from "../Components/Context/Window";
import { ModalProvider } from "../Components/Context/ModalContext";

export default function Home() {

    return(

        <ModalProvider>
            <React.Fragment>
                <Window />
                <Header />
                <MapBlock toggle={() => {}}/>
            </React.Fragment>
        </ModalProvider>

    )

}