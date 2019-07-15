import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getrecommendations} from '../../utility/recommendationCalculation'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
class RecommendationSummary extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
			recommendations: [],
            loaded : false
        }
        
	}
    
    componentDidMount()
    { 
        var elems = document.querySelectorAll('.collapsible');
         M.Collapsible.init(elems,{accordion: false});
        
    }
	updateState = () =>
    {
        const { filteredrecommendationList } =this.props;
        if(filteredrecommendationList && filteredrecommendationList.length > 1 )
        {   
                
            var data = getrecommendations(filteredrecommendationList);
            if(this.state.loaded === false)
            {
                this.setState({ recommendations : data,
						  loaded: true,
                    });

            }
            
        }
    }
    render() {
        this.updateState()
        const {filteredrecommendationList} =this.props;
        console.log(filteredrecommendationList);
        if(filteredrecommendationList && filteredrecommendationList.length > 1)
        {
            return (
                <div className="row">
                    <ul className="collapsible" data-collapsible="expandable">
                        <li>
                            <div className="collapsible-header">
                                First
                            </div>
                            <div className="collapsible-body">
                                First Body
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">
                                Second
                            </div>
                            <div className="collapsible-body">
                                Second Body
                            </div>
                        </li>
                    </ul>
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

