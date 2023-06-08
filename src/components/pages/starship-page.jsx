/* eslint react/prop-types: 0*/

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
                <List clickOnItem={this.clickOnItem} getData={this.apiService.getAllStarships}
                      render={(item) => `${item.name} - (${item.model})`}/>
                <Info id={this.state.chosenId} getInfoData={this.apiService.getStarship}
                      getImageUrl={this.apiService.getStarshipImageUrl}>
                    <Record label="Crew" field="crew"/>
                    <Record label="Passengers" field="passengers"/>
                    <Record label="Starship class" field="starship_class"/>
                </Info>
            </div>
        );
    }
}

export default PeoplePage;