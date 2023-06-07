/* eslint react/prop-types: 0 */
function RandomPlanetComponent({planetData}) {
    const {name, population, rotation, diameter, id} = planetData
    return (
        <div className="col d-flex align-items-center">
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""
                     className="planet"/>
            </div>
            <div className="info">
                <h1>{name}</h1>
                <p>Population: {population}</p>
                <p>Rotation Period: {rotation}</p>
                <p>Diameter: {diameter} km</p>
            </div>
        </div>);
}

export default RandomPlanetComponent;