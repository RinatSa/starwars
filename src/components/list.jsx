import {Component} from 'react';
import ApiService from "../apiService.js";

class List extends Component {

    apiService = new ApiService()

    state = {
        list: []
    }

    componentDidMount() {
        this.updateList()
    }

    updateList = () => {
        this.apiService
            .getAllPersons()
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
                        return (<li key={item.name}>{item.name}</li>)
                    })}
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                </ul>
            </div>
        );
    }
}

export default List;