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
            <h6 className="center"> Doughnut Example</h6>
            <Doughnut data={data} />
            </div>
        )
    }
}

export default Topideas;
