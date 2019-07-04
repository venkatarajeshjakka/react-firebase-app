import React, { Component } from 'react'
import axios from 'axios'
 class Nsehigh extends Component {
    componentDidMount()
    {
        axios.get('https://rajesh-nse-data.herokuapp.com/api/get52WeekHigh').then( res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        }
        );
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Nsehigh;