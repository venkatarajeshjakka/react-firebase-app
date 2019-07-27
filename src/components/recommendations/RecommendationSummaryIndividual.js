import React, { Component } from 'react'
import { connect } from 'react-redux'
import underscore from 'underscore'
import { targetPotential, filterWithDate } from '../../utility/recommendationCalculation'
import moment from 'moment'
class RecommendationSummaryIndividual extends Component {
    render() {
        const {filteredrecommendationList,recommendationStockData,stockCode} =this.props;
        var stockData = underscore.findWhere(recommendationStockData,{stockCode : stockCode});
        
        var response= filterWithDate(filteredrecommendationList);
       
        return (
            <div className="container">
                <div className="top-margin">
                
             <span className="h5">{stockData.price.longName} </span> <span>({stockData.stockCode})</span>
            <p className="zero-top-margin">{stockData.price.exchangeName} Real Time Price Currency in INR</p>
            <span className="big-font">{stockData.price.regularMarketPrice}</span> <span className="span-left-margin">{Number.parseFloat(stockData.price.regularMarketChange).toFixed(2)}</span><span>({Number.parseFloat(stockData.price.regularMarketChangePercent*100).toFixed(2)}%)</span>
             <p className="zero-top-margin">As of {moment(stockData.price.regularMarketTime).format('LLL')}</p>
            </div>  
          
            <ul className="collection">
                
                {
                    response.map( item => {
                        return(
                                <li key={item.id} className="collection-item">
                                    <div className="row">
                                        <div className="col">
                                                StockName : {item.stockName}
                                        </div>
                                        <div className="col">
                                            Target Price : {item.targetprice}
                                         </div>
                                            <div className="col">
                            
                                             Date : {moment(item.date,"YYYYMMDD").format('ll')}
                                            </div>
                                            <div className="col">
                                            Broker Name : {item.broker}
                                            </div>
                                            <div className="col">
                                                Potential : {targetPotential(stockData.price.regularMarketPrice,item.targetprice)}
                                             </div>
                                            
                                        </div>
                                    </li>
                                )
                            })
                        }
                        
                    
                </ul>
             
            
            </div>
            
        )
    }
}
const mapStateToProps = (state, ownProps) =>
{
    const stockCode = ownProps.match.params.stockCode;
    const recommendations =state.recommendation.filteredRecommendations;
    var filteredRecommendations = recommendations ? underscore.where(recommendations,{stockCode : stockCode}) : null;
    
    return{
        authState: state.firebase.auth,
        filteredrecommendationList : filteredRecommendations,
        recommendationStockData : state.nseData.recommendationStockData,
        stockCode : stockCode
        }
}
export default connect(mapStateToProps,null)(RecommendationSummaryIndividual) ;
