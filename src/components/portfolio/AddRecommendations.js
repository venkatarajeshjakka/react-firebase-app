import React, { Component } from 'react'
import Autocomplete from  'react-autocomplete';
import { getStocks, matchStocks } from '../../data/stockData';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import moment from "moment";
 class AddRecommendations extends Component {
    
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

    
      var elems = document.querySelectorAll('select');
      M.FormSelect.init(elems, null);
  
  }
    state = { value: '', date: new Date(),
    format: "ddd d, mmm",
    formatMoment: "ddd D, MMM",
    targetprice: '',
    recommendation: '',
    broker: ''
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
            <h5 className="center-align">Add Recommendation</h5>
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

            <div className="input-field ">
          <select id="recommendation" value={this.state.recommendation} onChange={this.handleChange}>
            <option value="" disabled selected>Choose your option</option>
            <option value="Buy">Buy</option>
            <option value="Hold">Hold</option>
            <option value="Sell">Sell</option>
        </select>
        <label htmlFor="recommendation">Select Recommendation</label>
      </div>
          <div className="input-field">
            <input type="text" id="targetprice" onChange={this.handleChange}/>
            <label htmlFor="targetprice">Target Price</label>
          </div>
          <div className="input-field">
            <input type="text" id="broker" onChange={this.handleChange}/>
            <label htmlFor="broker">Broker Name</label>
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

export default AddRecommendations;