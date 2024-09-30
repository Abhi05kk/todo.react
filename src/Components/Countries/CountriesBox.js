import React from "react";
import './CountriesBox.css'
import axios from "axios";
import { useState } from "react";
import CountriesCards from "./CountriesCards/CountriesCards";

function CountriesBox() {
    const [cData, setCData] = useState([])
    const getData = () => {

        axios.get('https://restcountries.com/v3.1/all').then((res) => {
            console.log(res);
            setCData(res.data)
        })

    }
    return (
        <div className="CountriesBox">
            <button onClick={getData}>getData</button>
           { cData.map((country, index) =><CountriesCards country={country} key={index} />) }
        </div>
    )
}

export default CountriesBox