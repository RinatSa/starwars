import {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row d-flex">
                <div className="col-2">
                    Star DB
                </div>
                <div className="col-10">
                    <nav>
                        <ul className="d-flex">
                            <li>People</li>
                            <li>Planets</li>
                            <li>Ships</li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;