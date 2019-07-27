import React from 'react'
import { targetPotential } from '../../utility/recommendationCalculation'
 const RecommendationBlock = (props)  =>{
     const {recommendationData,nseData} = props;
    
    return (
        
        <ul className="collection">
        {recommendationData.map( item => {
            
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
                    </div>
                </li>
            )
        })}
        </ul>
    )
}
export default RecommendationBlock;
