import PlanetImg from "../imagens";
import React from "react";
import PlanetDescription from "./description"
import './style.css'

const Planet = (props) => {
    const satellites = ['a', 'b', 'c', 'd']
    const listSatellites = satellites.map((n) =>
    <li>Satélite {n}</li>)


    let title;
    if(props.underline){
        title = <h4><u>{props.name}</u></h4>
    }
    else{
        title = <h4>{props.name}</h4>
    }
    return(
        <div>
            <h4>{title}</h4>
            <PlanetDescription description={props.description} link={props.link}></PlanetDescription>
            <PlanetImg img_url={props.img_url} name={props.name}  clickOnPlanet={props.clickOnPlanet}></PlanetImg>
            <h4>Satélites: </h4>
            <ul>
                {listSatellites}
            </ul>
            <hr></hr>
        </div>
    )
}

export default Planet;