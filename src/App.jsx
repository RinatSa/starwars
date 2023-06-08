import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";
import Header from "./components/header.jsx";
import RandomPlanet from "./components/random-planet.jsx";
import {Outlet} from "react-router-dom";

class App extends Component {


    state = {
        chosenId: 1
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <RandomPlanet/>
                <Outlet/>
            </div>
        )
    }
}

export default App
