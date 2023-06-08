import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PeoplePage from "./components/pages/people-page.jsx";
import StarshipPage from "./components/pages/starship-page.jsx";
import PlanetPage from "./components/pages/planet-page.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [{
            path: "/people",
            element: <PeoplePage/>,
        }, {
            path: "/starships",
            element: <StarshipPage/>
        }, {
            path: "/planets",
            element: <PlanetPage/>
        }],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)