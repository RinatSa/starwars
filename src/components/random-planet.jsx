import {Component} from 'react';

class RandomPlanet extends Component {
    render() {
        return (
            <div className="row">
                <div className="col d-flex align-items-center">
                    <div>
                        <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" alt=""
                             className="planet"/>
                    </div>
                    <div className="info">
                        <h1>Endor</h1>
                        <p>Population: 216451314354</p>
                        <p>Rotation Period: 15</p>
                        <p>Diameter: 5646546 km</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RandomPlanet;