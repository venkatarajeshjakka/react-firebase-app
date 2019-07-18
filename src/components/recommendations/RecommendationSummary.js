import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getrecommendations} from '../../utility/recommendationCalculation'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import underscore from 'underscore';
import RecommendationBlock from './RecommendationBlock'
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
	updateState = () =>
    {
        const { filteredrecommendationList } =this.props;
        if(filteredrecommendationList && filteredrecommendationList.length > 1 )
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
        }
    }
    render() {
        
        const {filteredrecommendationList} =this.props;
        
        if(filteredrecommendationList && filteredrecommendationList.length > 1)
        {
            return (
                <div className="container">
                <h5 className="content center">Recommendations</h5>
                <div className="row">
                    <ul className="collapsible" data-collapsible="expandable">
                    {this.state.recommendations.map(
                                item =>
                                    {
                                        var indiviudalData = underscore.where(filteredrecommendationList,{stockCode : item.stockCode});
                                return(
                                   
                                        <li key={item.id}>
                                        <div className="collapsible-header">
                                        <p>{item.stockCode}</p> <span className="new badge">{item.count}</span>
                                        </div>
                                        <div className="collapsible-body">
                                            < RecommendationBlock recommendationData= {indiviudalData} />
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
                <div>
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
        nseStocks: state.nseData.data
    }
}
export default connect(mapStateToProps, null)(RecommendationSummary);

