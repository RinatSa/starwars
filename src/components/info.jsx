/* eslint react/prop-types: 0*/

import {Component} from 'react';
import ApiService from "../apiService.js";

class Info extends Component {

    apiService = new ApiService()

    state = {
        info: {}
    }

    componentDidMount() {
        this.updateInfo()
    }

    updateInfo = () => {
        const {id} = this.props
        this.apiService
            .getPerson(id)
            .then((info) => {
                this.setState({info: info})
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id !== prevProps.id) {
            this.updateInfo()
        }
    }


    render() {
        const {name, gender, mass, height} = this.state.info
        return (
            <div className="col-5">
                <div>
                    <img src="https://starwars-visualguide.com/assets/img/starships/13.jpg" alt=""
                         className="planet"/>
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>Gender: {gender}</p>
                    <p>Mass: {mass} kg</p>
                    <p>Height: {height} cm</p>
                </div>
            </div>
        );
    }
}

export default Info;