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
            loaded : false,
            dailyChangePercentage : '',
            totalGain : '',
            gainPercentage : ''
        }
        
    }
    
    updateState = () =>
    {
        const { nseStocks, portfolioStockList} =this.props;
        if(nseStocks && nseStocks.length > 1 )
        {   
                
            var data = portfolioCalculation(portfolioStockList,nseStocks);
            if(this.state.loaded === false)
            {
                this.setState({ currentValue: data.currentValue,
                    investedValue: data.investedValue,
                     todayGain: data.todayGain,
                      loaded: true,
                      dailyChangePercentage : data.dailyChangePercentage,
                      totalGain : data.totalGain,
                    gainPercentage : data.gainPercentage
                    });

            }
            
        }
    }
    render() {
 
        this.updateState();
        return (
            <div>
            <div className="card-header">
            <h5 className="card-header-title">My <span>Portfolio</span></h5>
            </div>
        
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
                                <p> {this.state.todayGain}({this.state.dailyChangePercentage}%)</p>
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
                                <p>{this.state.totalGain} ({this.state.gainPercentage}%)</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
                
           
        )
    }
}


export default PortfolioCard;
