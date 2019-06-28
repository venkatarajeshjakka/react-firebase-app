import React, { Component } from 'react'
import Autocomplete from  'react-autocomplete';
import { getStocks, matchStocks } from '../../data/stockData';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import moment from "moment";
import { connect } from 'react-redux'
import { createPortfolioStock } from '../../store/actions/portfolioAction'
 class AddPortfolioStock extends Component {
  state = { 
            value: '', date: new Date(),
            format: "ddd d, mmm",
            formatMoment: "ddd D, MMM",
            quantity: '',
            cost: '',
          };
  componentDidMount() {
    
    var context = this;
    var elems = document.querySelectorAll(".dateset");
    M.Datepicker.init(elems, {
      defaultDate:this.state.date,
      format: this.state.format,
      container: "body",
      onSelect: function(date) {
        context.setState({ date: date });
      },
      autoClose: true
    });
  }
    
    
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
         this.props.createPortfolioStock(this.state)
         this.props.history.push('/portfolio');
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
          <input id="date" type="text" onChange= {this.handleChange} onSelect ={this.handleChange} className="datepicker dateset" defaultValue={moment(this.state.date).format(this.state.formatMoment )} />
            </div>  
          <div className="input-field">
            <input type="text" id="quantity" onChange={this.handleChange}/>
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

const mapStateToProps = (state) =>
{
    return{
        
        authState: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>
{
    return{
      createPortfolioStock: (portfolio) => dispatch(createPortfolioStock(portfolio))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AddPortfolioStock);