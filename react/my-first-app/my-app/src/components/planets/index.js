import { useState, useEffect } from "react"
import Planet from "../planet"
import  './style.css'
import React from "react"
import Form from './form'

const clickOnPlanet = (name) => {
    console.log('Planeta' + name + ' foi clicado')
}

async function getPlanets() {
    let res = await fetch('http://localhost:3000/api/planets.json')
    let data = res.json()
    return data
}


const Planets = () => {
    const [show,setShow] = useState(false)
    const [planets, setPlanets] = useState([])

    const AddPlanet = (planet) => {
        setPlanets([...planets, planet])
    }    

    const showPlanet = event => {
        setShow(current => !current)
        }

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [show])

    return (
        <div>
            <h2>Planet List</h2>
            <hr></hr>
            {!show && (
                <button onClick={showPlanet}>Mostrar Planetas</button>
            )}
            {show && (
                <div>
                    <button id='titlebutton' onClick={showPlanet}>Fechar Planetas</button>
                    <Form addPlanet={AddPlanet}></Form>
                        {planets.map((n) =>                        
                            <Planet name={n.name} description={n.description} img_url={n.img_url} link={n.link} clickOnPlanet={clickOnPlanet} underline={false} id={n.id}></Planet>                           
                        )} 
                </div>
            )}
        </div> 
    )
}

export default Planets;