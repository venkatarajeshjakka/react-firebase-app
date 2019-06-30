import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import underscore from 'underscore'
import { getStockInfo } from '../../data/stockData';
 class PortfolioSummary extends Component {
      
        getCurrentStocks = (portfolioStockList) => 
        {
            const stocks= underscore.map(portfolioStockList, function(item)
            {
                return {
                    stockCode : item.stockCode,
                    quantity : item.quantity,
                    cost: item.cost
                }
            });
            
          return stocks;
        }
    
    componentDidMount()
    { 
        var elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {direction:'top' ,hoverEnabled: true});
     
    }
    render() {
        const {auth,portfolioStockList} =this.props;
        var currentPositionList =this.getCurrentStocks(portfolioStockList);
        console.log(currentPositionList);

        var resonse= getStockInfo(currentPositionList);
        console.log('formatted response', resonse);
        return (
            <div className="container">

            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">mode_edit</i>
                </a>
                <ul>
                <li><NavLink to='/add-reco' className="btn-floating green"><i className="material-icons">publish</i></NavLink></li>
                <li><NavLink to='/add-stock' className="btn-floating blue"><i className="material-icons">add</i></NavLink></li>
                </ul>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>
{ 
    console.log(state.firestore);
    
    return{
        authState: state.firebase.auth,
        portfolioStockList: state.firestore.ordered.portfolios
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        if (!props.authState.uid) return []
        return [
            {
                collection: 'portfolios',
                where: [
                    ['authorId', '==', props.authState.uid]
                    ]
            }
        ]
    } )
)(PortfolioSummary);