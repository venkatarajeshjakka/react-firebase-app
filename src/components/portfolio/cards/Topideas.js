import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2'
import { topRecommendation, topIdeasBackgroundColor} from '../../../utility/recommendationCalculation';
import underscore from 'underscore'
import { NavLink } from 'react-router-dom'
class Topideas extends Component {
	constructor(props)
    {
        super(props);
        this.state = {
			labels: [],
			data: [],
			backgroundColor : [],
			loaded : false,
        }
        
	}
	
	updateState = () =>
    {
        const { filteredrecommendationList } =this.props;
        if(filteredrecommendationList && filteredrecommendationList.length > 1 )
        {   
                
            var data = topRecommendation(filteredrecommendationList);
            if(this.state.loaded === false)
            {
                this.setState({ labels: underscore.pluck(data, 'stockCode'),
						data : underscore.pluck(data, 'count'),
						  loaded: true,
						  backgroundColor: topIdeasBackgroundColor(underscore.size(data))
                    });

            }
            
        }
	}
	
    render() {
		this.updateState();
		if(this.state.loaded)
		{
			var data = {
				labels: this.state.labels,
				datasets: [{
					data: this.state.data,
					backgroundColor: this.state.backgroundColor,
					hoverBackgroundColor: this.state.backgroundColor
				}]
			}
			return (
				<div className="card">
				
				<Doughnut data={data} />
				<div className="card-action">
					<ul>
						<li>
						<NavLink to='/reco-summary'>View All</NavLink>
						</li>
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

export default Topideas;
