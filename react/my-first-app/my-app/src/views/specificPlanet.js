import React from "react";
import SpecificPlanet from "../components/planet/specific";
import { useSearchParams } from "react-router-dom";

const SpecificPlanetView = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("id")
    return(
        <SpecificPlanet id={searchParams}></SpecificPlanet>
    )
}

export default SpecificPlanetView;