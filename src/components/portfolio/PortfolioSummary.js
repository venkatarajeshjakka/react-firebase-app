import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRecommendations } from '../../store/actions/recommendationsAction'
import Topideas from '../portfolio/cards/Topideas'
import PortfolioCard from '../portfolio/cards/PortfolioCard'
import { getPortfolioStocksData } from '../../store/actions/nseStockDataAction'
import Indices from '../portfolio/cards/Indices'
 class PortfolioSummary extends Component {
    
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    { 
        var elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {direction:'top' ,hoverEnabled: true});
  
        this.callActions();
    }

    callActions = () =>
    {
        this.props.dispatch(getRecommendations());
        this.props.dispatch(getPortfolioStocksData());
    }
    
    render() {
       
        const {profile,filteredrecommendationList,portfolioStockList,nseStocks} =this.props
        
        return (

            <div className="container">`
            
            <h5>  Hi,{profile.firstName} {profile.lastName}</h5>
            <div className="row">
            <div className="col s12 m6 l5">
                <div>
                     <PortfolioCard portfolioStockList={portfolioStockList} nseStocks={nseStocks} /> 
                </div>
                <div>
                    <Topideas filteredrecommendationList={filteredrecommendationList} /> 
                </div>
                
            </div>
            <div className="col s12 m6 l4">
                <div>
                        <Indices />
                </div>
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
        filteredrecommendationList : state.recommendation.filteredRecommendations,
        portfolioStockList: state.portfolio.filteredPortfolioStocks,
        nseStocks: state.nseData.data,
        addedNewRecommendation : state.recommendation.addedNewRecommendation
    }
}
export default connect(mapStateToProps, null)(PortfolioSummary);