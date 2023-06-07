import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";
import Header from "./components/header.jsx";
import RandomPlanet from "./components/random-planet.jsx";
import List from "./components/list.jsx";
import Info from "./components/info.jsx";

class App extends Component {

    render() {
        return (
            <div className="container">
                <Header/>
                <RandomPlanet/>
                <div className="row justify-content-between">
                    <List/>
                    <Info/>
                </div>
            </div>
        )
    }
}

export default App
