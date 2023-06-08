import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";
import Header from "./components/header.jsx";
import RandomPlanet from "./components/random-planet.jsx";
import List from "./components/list.jsx";
import Info from "./components/info.jsx";
import ApiService from "./apiService.js";
import Record from "./components/record.jsx";

class App extends Component {

    apiService = new ApiService()

    state = {
        chosenId: 1
    }

    clickOnItem = (id) => {
        this.setState({chosenId: id})
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <RandomPlanet/>
                <div className="row justify-content-between">
                    <List clickOnItem={this.clickOnItem} getData={this.apiService.getAllPersons}
                          render={(item) => `${item.name} - (${item.gender})`}/>
                    <Info id={this.state.chosenId} getInfoData={this.apiService.getPerson}
                          getImageUrl={this.apiService.getPersonImageUrl}>
                        <Record label="Gender" field="gender"/>
                        <Record label="Height" field="height"/>
                        <Record label="Mass" field="mass"/>
                    </Info>
                </div>
                <div className="row justify-content-between">
                    <List clickOnItem={this.clickOnItem} getData={this.apiService.getAllStarships}
                          render={(item) => `${item.name} - (${item.model})`}/>
                    <Info id={this.state.chosenId} getInfoData={this.apiService.getStarship}
                          getImageUrl={this.apiService.getStarshipImageUrl}>
                        <Record label="Crew" field="crew"/>
                        <Record label="Passengers" field="passengers"/>
                        <Record label="Starship class" field="starship_class"/>
                    </Info>
                </div>
                <div className="row justify-content-between">
                    <List clickOnItem={this.clickOnItem} getData={this.apiService.getAllPlanets}
                          render={(item) => `${item.name} - (${item.terrain})`}/>
                    <Info id={this.state.chosenId} getInfoData={this.apiService.getPlanet}
                          getImageUrl={this.apiService.getPlanetImageUrl}>
                        <Record label="Climate" field="climate"/>
                        <Record label="Gravity" field="gravity"/>
                        <Record label="Population" field="population"/>
                    </Info>
                </div>
            </div>
        )
    }
}

export default App
