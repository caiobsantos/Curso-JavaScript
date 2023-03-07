import {React, Fragment, useState} from 'react';

const initialState = {
    name: '',
    description: '',
    img_url: '',
    link: '',
    underline: false,
    id: '',
}


const Form = (props) => {
    const [fields, setFields] = useState(initialState)
    const handleChange = (e) => {
        setFields({
            ...fields, 
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        props.addPlanet(fields)
        e.preventDefault();
        setFields(initialState)
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id="name" value={fields.name} onChange={handleChange}></input>

                    <label htmlFor='description'>Description:</label>
                    <input type="text" id="description" value={fields.description} onChange={handleChange}></input>

                    <label htmlFor='img_url'>Url da Imagem:</label>
                    <input type="text" id="img_url" value={fields.img_url} onChange={handleChange}></input>

                    <label htmlFor='link'>Link Wikipédia:</label>
                    <input type="text" id="link" value={fields.link} onChange={handleChange}></input>

                    {/* <label htmlFor='id'>Id:</label>
                    <input type="text" id="id" value={fields.id} onChange={handleChange}></input> */}
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form;