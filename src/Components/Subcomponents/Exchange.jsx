import React, { useEffect, useState } from "react";

export default function Exchange() {

    const [currencyUsd, setCurrencyUsd] = useState('')
    
    const [currencyEur, setCurrencyEur] = useState('')

    useEffect(() => {

        fetch('https://open.er-api.com/v6/latest/USD')
            .then((response) => response.json())
            .then((result) => {
                setCurrencyUsd(result.rates.RUB)
            })
            .catch((error) => console.log(error))

    })

    useEffect(() => {

        fetch('https://open.er-api.com/v6/latest/EUR')
            .then((response) => response.json())
            .then((result) => {
                setCurrencyEur(result.rates.RUB)
            })
            .catch((error) => console.log(error))

    })

    return (

        <>
            <div className="header-block__exchange">
                <span>USD:</span><span>{currencyUsd}</span><span>EUR: </span><span>{currencyEur}</span>
            </div>
        </>

    )

}