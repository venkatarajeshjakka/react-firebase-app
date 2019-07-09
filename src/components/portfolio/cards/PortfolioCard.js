import React, { Component } from 'react'
import { portfolioCalculation } from '../../../utility/stockCalculation'
class PortfolioCard extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            currentValue: '',
            investedValue: '',
            todayGain: '',
            loaded : false
        }
    }
    
    updateState = (portfolioStockList,nseStocks) =>
    {
        if(nseStocks && nseStocks.length > 1 )
        {   
                
            var data = portfolioCalculation(portfolioStockList,nseStocks);
            if(this.state.loaded === false)
            {
                this.setState({ currentValue: data.currentValue,
                    investedValue: data.investedValue,
                     todayGain: data.todayGain,
                      loaded: true});

            }
            
        }
    }

    render() {

        const { nseStocks, portfolioStockList} =this.props;
        
        this.updateState(portfolioStockList,nseStocks);
        
        return (
            <div>
            <h5 className="left-align">My Portfolio</h5>
                <div className="card">
                    <div className="card-content">
                        
                        <div className="row">
                            <div className="col">
                                <span>
                                    Current Value
                                </span>
                                <p> {this.state.currentValue}</p>
                            </div>
                            <div className="col">
                            <span>
                             Day Gain
                                </span>
                                <p> {this.state.todayGain}(-1.07%)</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span>
                                    Invested Amount
                                </span>
                                <p>
                                    {this.state.investedValue}
                                </p>
                            </div>
                            <div className="col">
                                <span>Returns</span>
                                <p>2,607.07 (4.27%)</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
                
           
        )
    }
}


export default PortfolioCard;
