import React from 'react'

 const RecommendationBlock = (props)  =>{
     const {recommendationData} = props;
    
    return (
        
        <ul>
        {recommendationData.map( item => {
            
            return(
                <li key={item.id} className="card">
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
                    </div>
                </li>
            )
        })}
        </ul>
    )
}
export default RecommendationBlock;
