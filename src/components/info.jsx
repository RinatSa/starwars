/* eslint react/prop-types: 0*/

import {Component} from 'react';
import ApiService from "../apiService.js";

class Info extends Component {

    apiService = new ApiService()

    state = {
        info: {},
        image: null
    }

    componentDidMount() {
        this.updateInfo()
    }

    updateInfo = () => {
        const {id} = this.props
        this.props.getInfoData(id)
            .then((info) => {
                this.setState({info: info, image: this.props.getImageUrl(id)})
            })
    }

    // eslint-disable-next-line no-unused-vars
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id !== prevProps.id) {
            this.updateInfo()
        }
    }


    render() {
        const {name, gender, mass, height} = this.state.info
        const {image} = this.state
        return (
            <div className="col-5">
                <div>
                    <img src={image} alt=""
                         className="person"/>
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