import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
 class PortfolioSummary extends Component {
    
    componentDidMount()
    {    
        var elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {direction:'top' ,hoverEnabled: true});
    }
    render() {
        return (
            <div className="container">

            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">mode_edit</i>
                </a>
                <ul>
                <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                <li><a className="btn-floating blue"><i className="material-icons">add</i></a></li>
                </ul>
            </div>
            </div>
        )
    }
}
export default PortfolioSummary;