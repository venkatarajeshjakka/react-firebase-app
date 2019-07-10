import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
class Topideas extends Component {
    render() {
        
        return (
            <div className="card">
            
            <Doughnut data={data} />
            </div>
        )
    }
}

export default Topideas;
