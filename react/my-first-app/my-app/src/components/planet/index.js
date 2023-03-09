import PlanetImg from "../imagens";
import React, { Fragment, useState, useEffect } from "react";
import PlanetDescription from "./description"
import './style.css'
import SatelliteForm from "./form";
import {Link} from "react-router-dom";


async function getSatellites(planet){
    let res = await fetch('http://localhost:3000/api/' + planet + '.json')
    let data = res.json()
    return data
}

const Planet = (props) =>{
    const[luas, setLuas] = useState([])

    const addSatellite = (satellites) => {
        setLuas([...luas, satellites])
    }

    useEffect(() => {
        getSatellites(props.id).then(data => {
            setLuas(data['satellites'])
        })
    }, [])
    
    return(
        <Fragment>
            <Link to={{pathname: `/planet/${props.id}`}} params={{ id: props.id }}>
                <h3>{props.name}</h3>
            </Link>
            <PlanetDescription description={props.description} link={props.link}></PlanetDescription>
            <PlanetImg img_url={props.img_url} name={props.name}  clickOnPlanet={props.clickOnPlanet}></PlanetImg>
            <h4>Satélites: </h4>
            <ul>
            {luas.map((n) => <li>{n.name}</li>)}
            </ul>
            <br></br>
            <SatelliteForm addSatellite={addSatellite}></SatelliteForm>
            <hr></hr>
        </Fragment>
    ) 
}

export default Planet;