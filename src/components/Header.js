import React, {Component} from 'react';
import '../styles/header.css';


class Header extends Component{
    render(){
        return(
            <nav className="navbar">
                <h2 className="main-heading">React Weather App</h2>
            </nav>
        )
    }
}

export default Header