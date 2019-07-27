import React from 'react'
import { targetPotential } from '../../utility/recommendationCalculation'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

 const RecommendationBlock = (props)  =>{
     const {recommendationData,nseData} = props;
    var response = recommendationData.length > 5 ? recommendationData.slice(0,5) :recommendationData;
    
    return (
        
        <ul className="collection">
        {response.map( item => {
            
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
                            Broker Name : {item.broker}
                        </div>
                        <div className="col">
                            Potential : {targetPotential(nseData.price.regularMarketPrice,item.targetprice)}
                        </div>
                        <div className="col">
                            Date : {moment(new Date(item.date.seconds*1000),"YYYYMMDD").format('ll')}
                        </div>
                    </div>
                </li>
            )
        })}
        <li className='collection-item center'>
        <NavLink to={'/reco-summary-individual/'+recommendationData[0].stockCode} className=''>View More</NavLink>
        </li>
        </ul>
    )
}
export default RecommendationBlock;
