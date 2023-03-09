import { useParams, useNavigate } from "react-router-dom";


const SpecificPlanet = () => {
    
    const {id} = useParams();
    let navigate = useNavigate();

    const goRoot = () => {
        navigate('/')
    }

    return(
        <div>
            <h1>{id}</h1>
            <button onClick={goRoot}>Voltar</button>
        </div>
    )
}

export default SpecificPlanet;