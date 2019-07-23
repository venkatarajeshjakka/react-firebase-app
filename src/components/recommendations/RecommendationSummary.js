import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getrecommendations, targetRange, targetRangeText} from '../../utility/recommendationCalculation'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import underscore from 'underscore';
import RecommendationBlock from './RecommendationBlock'
import { getNsedata } from '../../store/actions/nseStockDataAction'
class RecommendationSummary extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
			recommendations: [],
            loaded : false
        }
        //this.props.dispatch(getRecommendations());
	}
    
    componentDidMount()
    { 
        var elems = document.querySelectorAll('.collapsible');
         M.Collapsible.init(elems,{accordion: true});
         this.updateState()
    }
    validateData = (recommendationData) =>
    {
        const {nseStocks} =this.props;
        if(nseStocks && nseStocks.length >0)
        {
            var recommendationStockCodeArray = underscore.pluck(recommendationData,'stockCode');
            var nseStockCodeArray = underscore.pluck(nseStocks,'stockCode');
            var stockArray = underscore.filter(recommendationStockCodeArray,function(item)
            {
                if(!underscore.contains(nseStockCodeArray, item))
                {
                    return item;
                }
            });
           
             if(stockArray && stockArray.length >0)
            {
                this.props.getNsedata(stockArray);
            }     
        }
    }
	updateState = () =>
    {
        const { filteredrecommendationList } =this.props;
        if(filteredrecommendationList && filteredrecommendationList.length > 0 )
        {   
                
            var data = getrecommendations(filteredrecommendationList);
            data = underscore.filter(data, function(item){
                return item.count > 0;
            });
            if(this.state.loaded === false)
            {
                this.setState({ recommendations : data,
						  loaded: true,
                    });
            }
            
            this.validateData(data);
        }
    }
    render() {
        
        const {filteredrecommendationList,recommendationStockData} =this.props;
       
        if(filteredrecommendationList && filteredrecommendationList.length > 0 && recommendationStockData && recommendationStockData.length >0)
        {
            return (
                <div className="container">
                <h5 className="content center">Recommendations</h5>
                <div className="row">
                    <ul className="collapsible" data-collapsible="expandable">
                    {this.state.recommendations.map(
                                item =>
                                    {
                                        var stockData = underscore.findWhere(recommendationStockData,{stockCode : item.stockCode});
                                        
                                        var indiviudalData = underscore.where(filteredrecommendationList,{stockCode : item.stockCode});
                                         var targetRangeData = targetRange(stockData.price.regularMarketPrice,indiviudalData)
                                         
                                return(
                                   
                                        <li key={item.id}>
                                        <div className="collapsible-header">
                                            <div>
                                                <div className="row">
                                                    <div className="col center-align">
                                                    {item.stockName}
                                                    </div>
                                                    <div className="col center-align">
                                                    Last Price (in Rs) :{stockData.price.regularMarketPrice}
                                                    </div>
                                                    <div className="col center-align">
                                                    Change :{Number.parseFloat(stockData.price.regularMarketChange).toFixed(2)} <span>({Number.parseFloat(stockData.price.regularMarketChangePercent*100).toFixed(2)}%)</span>
                                                    </div>
                                                    <div className="col center-align">
                                                        Target Range: {targetRangeText(targetRangeData.minValue.targetprice,targetRangeData.maxValue.targetprice)}
                                                    </div>
                                                    <div className="col center-align">
                                                    <span className="new badge">{item.count}</span>
                                                    </div>
                                                </div>
                                            </div>
                                       
                                        </div>
                                        <div className="collapsible-body">
                                            < RecommendationBlock recommendationData= {indiviudalData} nseData={stockData} />
                                         </div>
                                        </li>
                                    
                                  )
                                 }
                            )}
                    </ul>
                </div>
                </div>
                
            )
        }
        else{
            return(
                <div className="card">
                    Loading..
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) =>
{ 
    return{
        authState: state.firebase.auth,
        filteredrecommendationList : state.recommendation.filteredRecommendations,
        nseStocks: state.nseData.data,
        recommendationStockData : state.nseData.recommendationStockData
    }
}
const mapDispatchToProps = (dispatch) =>
{
    return{
      getNsedata: (stockCodeArray) => dispatch(getNsedata(stockCodeArray))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecommendationSummary);

