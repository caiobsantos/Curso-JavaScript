import React from "react";
import './style.css'

const PlanetImg = (props) => {
    return (
        <img src={props.img_url} alt={props.name}></img>
    )
}

export default PlanetImg;