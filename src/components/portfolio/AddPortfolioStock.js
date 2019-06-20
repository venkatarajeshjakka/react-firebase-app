import React, { Component } from 'react'
import Autocomplete from  'react-autocomplete';
import { getStocks, matchStocks } from '../../data/stockData';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import moment from "moment";
 class AddPortfolioStock extends Component {
    
  componentDidMount() {
    var context = this;

    var elems = document.querySelectorAll(".dateset");
    M.Datepicker.init(elems, {
      defaultDate: new Date(),
      format: this.state.format,
      container: "body",
      onSelect: function(date) {
        context.setState({ date: context.state.date });
        console.log(date); // Selected date is logged
      },
      autoClose: true
    });
  }
    state = { value: '', date: new Date(),
    format: "ddd d, mmm",
    formatMoment: "ddd D, MMM",
    quanity: '',
    cost: ''
     };
    
     handleChange =(e) =>
     {
         this.setState({
             [e.target.id]: e.target.value
         })
     }
 
     handleSubmit =(e) =>
     {
         e.preventDefault();
         console.log(this.state);
     }
    render() {
      
        return (
          <div className="container">
            <h5 className="center-align">Add Stock</h5>
            <div className="row">
            <form onSubmit={this.handleSubmit} className="white">
          <div className="input-field">
           
            <Autocomplete
                        value={ this.state.value }
                        inputProps={{ id: 'stock' ,placeholder: 'Add Stock...' }}
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
           
                      
                    
                  </div>
          <div className="input-field">
          <i className="material-icons prefix">date_range</i>
          <input id="date" type="text" className="datepicker dateset" defaultValue={moment(this.state.date).format(this.state.formatMoment )} />
            </div>  
          <div className="input-field">
            <input type="text" id="quanity" onChange={this.handleChange}/>
            <label htmlFor="quantity">Shares</label>
          </div>
          <div className="input-field">
            <input type="text" id="cost" onChange={this.handleChange}/>
            <label htmlFor="cost">Cost Basis</label>
          </div>
            <div className="input-field">
              <button className="btn blue lighten-1 z-depth-0 center">
                  Done
              </button>
                       
            </div>
          </form>
       </div>
         
           
         </div>
        
        )
    }
}

export default AddPortfolioStock;