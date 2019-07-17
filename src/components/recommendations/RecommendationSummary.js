import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getrecommendations} from '../../utility/recommendationCalculation'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import underscore from 'underscore';
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
        console.log(filteredrecommendationList);
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
                                return(
                                   
                                        <li key={item.id}>
                                        <div className="collapsible-header">
                                        <p>{item.stockCode}</p> <span class="new badge">{item.count}</span>
                                        </div>
                                        <div className="collapsible-body">
                                        {item.stockCode} here some content
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

