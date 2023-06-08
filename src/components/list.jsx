/* eslint react/prop-types: 0 */
import {Component} from 'react';
import ApiService from "../apiService.js";

class List extends Component {

    apiService = new ApiService()

    state = {
        list: [],
    }

    componentDidMount() {
        this.updateList()
    }

    updateList = () => {
        this.props.getData()
            .then((list) => {
                this.setState({list})
            })
    }

    render() {
        const {list} = this.state
        return (
            <div className="col-5">
                <ul>
                    {list.map((item) => {
                        const id = item.url.match(/\/([0-9]*)\/$/)[1]
                        const label = this.props.render(item)
                        return (<li key={id} onClick={() => this.props.clickOnItem(id)}>{label}</li>)
                    })}
                </ul>
            </div>
        );
    }
}

export default List;