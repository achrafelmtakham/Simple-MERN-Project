import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() { 
        return (  
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <Link to="/" className="navbar-brand" >Exercice Tracker</Link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Exercices</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="nav-link" >Create Exercice</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user" className="nav-link" >Create User</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;