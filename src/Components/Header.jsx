import React from "react";
import Exchange from "./Subcomponents/Exchange";

export default function Header() {

    return(

        <>
            <div className="header-block">
                <img className="header-block__logo" src="/icon.png" alt="logo" />
                <input className="header-block__search" type="text" placeholder="Брокерский счет за 5 минут" />
                <Exchange />
            </div>
        </>

    )

}