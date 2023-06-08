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
                <List clickOnItem={this.clickOnItem} getData={this.apiService.getAllPersons}
                      render={(item) => `${item.name} - (${item.gender})`}/>
                <Info id={this.state.chosenId} getInfoData={this.apiService.getPerson}
                      getImageUrl={this.apiService.getPersonImageUrl}>
                    <Record label="Gender" field="gender"/>
                    <Record label="Height" field="height"/>
                    <Record label="Mass" field="mass"/>
                </Info>
            </div>
        );
    }
}

export default PeoplePage;