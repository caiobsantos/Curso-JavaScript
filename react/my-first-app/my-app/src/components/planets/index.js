import { Fragment } from "react"
import Planet from "../planet"
import  './style.css'

const clickOnPlanet = (name) => {
    console.log('Planeta' + name + ' foi clicado')
}

const planets = () => {
    return (
        <Fragment>
            <h2>Planet List</h2>
            <button id="button">Desisto</button>
            <ul className='list'>
                <li>
                    <Planet name="Saturno" img_url="https://4.bp.blogspot.com/-vL1jjVdUvlM/T0oYItt4SPI/AAAAAAAADDA/Oh2iiMg7PEI/s1600/PLANETA+SATURNO.jpg" description ="teste" link="https://pt.wikipedia.org/wiki/Saturno_(planeta)"  clickOnPlanet={clickOnPlanet}></Planet>
                </li>
                <li>
                    <Planet name="Júpiter" img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/800px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg" description="teste" link="https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)" clickOnPlanet={clickOnPlanet}></Planet>
                </li>
            </ul>
        </Fragment>
    )
}

export default planets;