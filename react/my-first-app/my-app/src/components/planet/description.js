const PlanetDescription = (props) => {
    if(props.link){
        return (
            <div>
                <p>{props.description}</p>
                <a href={props.link}>Link</a>
            </div>
        )
    }
    else{
        return (
            <div>
                <p>{props.description}</p>
                <p>Não há link</p>
            </div>
        )
    }
}

export default PlanetDescription;