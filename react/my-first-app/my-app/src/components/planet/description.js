const PlanetDescription = (props) => {
    return (
        <div>
            <p>{props.description}</p>
            <a href={props.link}>Link</a>
        </div>
    )
}

export default PlanetDescription;