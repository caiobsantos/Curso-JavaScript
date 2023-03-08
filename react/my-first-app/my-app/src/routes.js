import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PlanetView from "./views/planets";
import SpecificPlanetView from "./views/specificPlanet";

const Pages = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PlanetView/>}></Route>
            <Route path='/planet/:id' element={<SpecificPlanetView/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default Pages;