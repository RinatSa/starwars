import {Component} from 'react';

class Info extends Component {
    render() {
        return (
            <div className="col-5">
                <div>
                    <img src="https://starwars-visualguide.com/assets/img/starships/13.jpg" alt=""
                         className="planet"/>
                </div>
                <div>
                    <h1>Endor</h1>
                    <p>Population: 216451314354</p>
                    <p>Rotation Period: 15</p>
                    <p>Diameter: 5646546 km</p>
                </div>
            </div>
        );
    }
}

export default Info;