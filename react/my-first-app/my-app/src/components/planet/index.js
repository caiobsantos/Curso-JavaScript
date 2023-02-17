import PlanetImg from "../imagens";
import React from "react";
import PlanetDescription from "./description"
import './style.css'

const Planet = (props) => {
    return(
        <div>
            <h4>{props.name}</h4>
            <PlanetDescription description={props.description} link={props.link}></PlanetDescription>
            <PlanetImg img_url={props.img_url} name={props.name}  clickOnPlanet={props.clickOnPlanet}></PlanetImg>
        </div>
    )
}

export default Planet;