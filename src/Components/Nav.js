import React from "react";
import Nav from "react-bootstrap/Nav"
import { YMaps, Map } from "@pbe/react-yandex-maps"

export default function Navigate() {

    return (
        <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Главная</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <YMaps className="map-block">
                 <div>
                    <Map  />
                 </div>
            </YMaps>
        </>
    )

}