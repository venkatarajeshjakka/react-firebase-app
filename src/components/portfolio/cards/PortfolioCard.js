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
       
        if(nseStocks && nseStocks.length > 0 )
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
        const { nseStocks, portfolioStockList} =this.props; 
        if(nseStocks && nseStocks.length > 0 && portfolioStockList && portfolioStockList.length > 0 )
        {
            return (
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


export default PortfolioCard;
