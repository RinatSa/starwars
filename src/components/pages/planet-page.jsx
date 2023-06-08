import List from "../list.jsx";
import Info from "../info.jsx";
import Record from "../record.jsx";
import ApiService from "../../apiService.js";
import {Component} from "react";


class PeoplePage extends Component {

    apiService = new ApiService()

    state = {
        chosenId: 1
    }

    clickOnItem = (id) => {
        this.setState({chosenId: id})
    }

    render() {
        return (
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
        );
    }
}

export default PeoplePage;