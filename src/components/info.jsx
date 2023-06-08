/* eslint react/prop-types: 0*/

import {Children, cloneElement, Component} from 'react';
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
        const {image, info} = this.state
        return (
            <div className="col-5">
                <div>
                    <img src={image} alt=""
                         className="person"/>
                </div>
                <div>
                    <h1>{info.name}</h1>
                    {Children.map(this.props.children, (child => {
                        return cloneElement(child, {info})
                    }))}
                </div>
            </div>
        );
    }
}

export default Info;