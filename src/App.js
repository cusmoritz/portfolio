
import { useEffect, useState } from "react";
import { Header } from "./components/Header";

export const App = () => {

    return (
        <div className="container">
            <h1>Chance of Rain</h1>
            <Header />
            <p>{locationLoad.lat}, {locationLoad.lng}</p>
            {!postalLoad ? console.log("Nope") : <p>Looks like you are near {postalLoad}. <button onClick={confirmPostal}>Use that?</button></p>}
            <SearchBar secret={SECRET} />
            <hr />
            {(Object.keys(standardWeather).length === 0 && Object.keys(hourlyWeather).length === 0) ? null : <Weather hourlyWeather={hourlyWeather} standardWeather={standardWeather}/>}
            <Footer />
        </div>
    )
}