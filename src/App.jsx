import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";
import Header from "./components/header.jsx";
import RandomPlanet from "./components/random-planet.jsx";
import List from "./components/list.jsx";
import Info from "./components/info.jsx";
import ApiService from "./apiService.js";

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
                    <Info id={this.state.chosenId} getInfoData={this.apiService.getPerson}/>
                </div>
                <div className="row justify-content-between">
                    <List clickOnItem={this.clickOnItem} getData={this.apiService.getAllStarships}
                          render={(item) => `${item.name} - (${item.model})`}/>
                    <Info id={this.state.chosenId} getInfoData={this.apiService.getStarship}/>
                </div>
                <div className="row justify-content-between">
                    <List clickOnItem={this.clickOnItem} getData={this.apiService.getAllPlanets}
                          render={(item) => `${item.name} - (${item.terrain})`}/>
                    <Info id={this.state.chosenId} getInfoData={this.apiService.getPlanet}/>
                </div>
            </div>
        )
    }
}

export default App
