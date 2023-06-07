import {Component} from 'react';
import ApiService from "../apiService.js";
import RandomPlanetComponent from "./random-planet-component.jsx";
import Loader from "./loader";
import ShowError from "./show-error.jsx";

class RandomPlanet extends Component {

    apiService = new ApiService()

    state = {
        planet: {
            name: null,
            population: null,
            rotation: null,
            diameter: null
        },
        loading: true,
        error: false
    }

    componentDidMount() {
        setInterval(this.updatePlanet, 5000)
    }

    updatePlanet = () => {
        const id = Math.floor(3 + Math.random() * 17)
        this.apiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    planet: {
                        name: planet.name,
                        population: planet.population,
                        rotation: planet.rotation_period,
                        diameter: planet.diameter,
                        id: id
                    },
                    loading: false,
                    error: false
                })
            })
            .catch((error) => {
                console.log(error)
                this.setState({error: true, loading: false})
            })
    }

    render() {
        const {loading, error} = this.state
        return (
            <div className="row">
                {loading ? <Loader/> : null}
                {error ? <ShowError/> : null}
                {!(loading || error) ? <RandomPlanetComponent planetData={this.state.planet}/> : null}
            </div>
        );
    }
}

export default RandomPlanet;