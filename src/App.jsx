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
                    <List clickOnItem={this.clickOnItem} getData={this.apiService.getAllPersons}/>
                    <Info id={this.state.chosenId}/>
                </div>
                <div className="row justify-content-between">
                    <List clickOnItem={this.clickOnItem} getData={this.apiService.getAllStarships}/>
                    <Info id={this.state.chosenId}/>
                </div>
                <div className="row justify-content-between">
                    <List clickOnItem={this.clickOnItem} getData={this.apiService.getAllPlanets}/>
                    <Info id={this.state.chosenId}/>
                </div>
            </div>
        )
    }
}

export default App
