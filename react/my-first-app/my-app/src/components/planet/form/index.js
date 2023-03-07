import {Fragment, useState} from 'react'

const SatelliteForm = (props) => {
    const[satellite, setSatellite] = useState('');

    const handleChange = e => setSatellite(e.target.value)

    const handleSubmit = e => {
        props.addSatellite({name: satellite});
        e.preventDefault();
        setSatellite('')
    }

    return(
        <Fragment>
            <p>Adicionar Satélite</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Nome:</label>
                    <input type='text' id='name' value={satellite} onChange={handleChange} required></input>
                </div>
                    <input type='submit'></input>
            </form>
        </Fragment>
    )
}

export default SatelliteForm;