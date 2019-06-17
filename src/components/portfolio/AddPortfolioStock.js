import React, { Component } from 'react'
import Autocomplete from  'react-autocomplete';
import { getStocks, matchStocks } from '../../data/stockData';
import "materialize-css/dist/css/materialize.min.css";

 class AddPortfolioStock extends Component {
    
  
    state = { value: ''
     };
    
    render() {
      
        return (
          <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
          <div className="input-field">
            <span>Add Stock: </span>
            <span>
            <Autocomplete
                        value={ this.state.value }
                        inputProps={{ id: 'stock' }}
                        wrapperStyle={{ position: 'relative', display: 'inline-block', padding: 10 }}
                        items={ getStocks() }
                        getItemValue={ item => item.name }
                        shouldItemRender={ matchStocks }
                        onChange={(event, value) => this.setState({ value }) }
                        onSelect={ value => this.setState({ value }) }
                        renderMenu={ (items, value) => (
                        <div className = "menu">
                          {value === '' ? (
                          "Type of the name ..."
                             ) : items.length === 0 ? (
                           <div className="item">No matches for {value}</div>
                      ) : items}
                       </div>
                         )}
                    renderItem={ (item, isHighlighted) => (
                     <div
                       className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                         key={ item.abbr } >
                        { item.name }
                    </div>
                       )}
                    />
            </span>
                      
                    
                  </div>
            </form>
           
         </div>
        
        )
    }
}

export default AddPortfolioStock;