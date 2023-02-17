import PlanetImg from "../imagens";
import { Fragment } from "react";
import PlanetDescription from "./description"
import './style.css'

const Planet = (props) => {
    return(
        <Fragment>
            <h4>{props.name}</h4>
            <PlanetDescription description={props.description} link={props.link}></PlanetDescription>
            <PlanetImg img_url={props.img_url} name={props.name}></PlanetImg>
        </Fragment>
    )
}

export default Planet;