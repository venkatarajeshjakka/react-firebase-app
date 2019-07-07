import React, { Component } from 'react'
import { getPortfolioStocksData } from '../../../store/actions/nseStockDataAction'
import { connect } from 'react-redux'
class PortfolioCard extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            portfolioStockList: []
        }
    }
    componentDidMount()
    {
        this.props.dispatch(getPortfolioStocksData());
    }
    
    render() {

        const { nseStocks } =this.props;
        console.log('nse data:', nseStocks);
        return (
            
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">
                            My Portfolio
                        </span>
                        <div className="row">
                            <div className="col">
                                <span>
                                    Current Investment Value
                                </span>
                                <p> 63,607.07</p>
                            </div>
                            <div className="col">
                            <span>
                             Day Gain
                                </span>
                                <p> - 690.03 (-1.07%)</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span>
                                    Invested Amount
                                </span>
                                <p>
                                    61,0000
                                </p>
                            </div>
                            <div className="col">
                                <span>Returns</span>
                                <p>2,607.07 (4.27%)</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
           
        )
    }
}

const mapStateToProps = (state) =>
{ 
    return{
        authState: state.firebase.auth,
         nseStocks: state.nseData.data
       
    }
}
export default connect(mapStateToProps, null)(PortfolioCard);
