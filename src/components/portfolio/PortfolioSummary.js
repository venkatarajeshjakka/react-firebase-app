import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRecommendations } from '../../store/actions/recommendationsAction'
import { getPortfolioStocks } from '../../store/actions/portfolioAction'
import Topideas from '../portfolio/cards/Topideas'
import Nsehigh from '../portfolio/cards/Nsehigh'
import PortfolioCard from '../portfolio/cards/PortfolioCard'

 class PortfolioSummary extends Component {
    
    componentDidMount()
    { 
        var elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {direction:'top' ,hoverEnabled: true});
        this.props.dispatch(getRecommendations());
        this.props.dispatch(getPortfolioStocks());
    }
    render() {
       
        const {profile,portfolioStockList} =this.props
        
        return (
            <div className="container">`
            <div>
            <h5>Hi {profile.firstName} {profile.lastName}</h5>
            </div>
            <div className="row">
                <div className="col s12 m6 l6">
                    <PortfolioCard portfolioStockList={portfolioStockList}/>
                </div>

            </div>
            <div className="row">
                <div className="col s12 m6 l6">
                    <Topideas />
                </div>
                <div className="col s12 m6 l6">
                    <Nsehigh />
                </div>
            </div>
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
    return{
        authState: state.firebase.auth,
        profile: state.firebase.profile,
        portfolioStockList: state.portfolio.filteredPortfolioStocks,
        recommendationsList : state.recommendation.recommendations,
        filteredrecommendationList : state.recommendation.filteredRecommendations
    }
}
export default connect(mapStateToProps, null)(PortfolioSummary);