import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getIndicesData } from '../../../store/actions/nseStockDataAction'
import underscore from 'underscore'
 class Indices extends Component {
    constructor(props)
    {
        super(props);
        this.props.dispatch(getIndicesData());
    }

   
    render() {

        const {indiciesData} = this.props;
       
        if(indiciesData && indiciesData.length >1)
        {
            return(
                <div>
            <div className="card-header">
            <h5 className="card-header-title">#<span>Indices</span></h5>
            </div>
                <div className="card">
                    <div className="card-content">
                        
                        <div className="row">

                            {indiciesData.map(
                                item =>
                                    {
                                return(
                    <div className="col">
                    <p>{item.price.shortName}</p>
                    <p><span>{item.price.regularMarketPrice}</span> </p>
                    <p><span>{Number.parseFloat(item.price.regularMarketChange).toFixed(2)}</span> <span>(+{Number.parseFloat(item.price.regularMarketChangePercent*100).toFixed(2)}%)</span></p>
                    </div>
                )
            }
        )}    
                        </div>
                    </div>
                </div>
            </div>
            )           
        }
        return (
                
            <div>
                Loading...
            </div>
        )
    }
}

const mapStateToProps = (state) =>
{ 
    return{
      indiciesData : state.nseData.indiciesData
    }
}
export default connect(mapStateToProps, null)(Indices);
