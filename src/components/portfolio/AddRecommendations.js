import React, { Component } from 'react'
import Autocomplete from  'react-autocomplete';
import { getStocks, matchStocks } from '../../data/stockData';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import moment from "moment";
import { connect } from 'react-redux'
import { addRecommendations } from '../../store/actions/recommendationsAction'
import underscore from 'underscore'
 class AddRecommendations extends Component {
  state = 
  { 
  value: '', date: new Date(),
  format: "ddd d, mmm",
  formatMoment: "ddd D, MMM",
  targetprice: '',
  recommendation: '',
  broker: '',
  showwarning : false
   };
  componentDidMount() {
    var context = this;

    var elems = document.querySelectorAll(".dateset");
    M.Datepicker.init(elems, {
      defaultDate: new Date(),
      format: this.state.format,
      container: "body",
      onSelect: function(date) {
        context.setState({ date: date});
        console.log(date); // Selected date is logged
      },
      autoClose: true
    });

    
      var elems = document.querySelectorAll('select');
      M.FormSelect.init(elems, null);
  
  }
   
    
     handleChange =(e) =>
     {
         this.setState({
             [e.target.id]: e.target.value
         })
         this.setState({
          showwarning:false
         })
     }
    
     handleSubmit =(e) =>
     {
         e.preventDefault();
         console.log(this.state);
         const {filteredrecommendationList} = this.props;
         
         var duplicateRecord = underscore.findWhere(filteredrecommendationList, {stockName: this.state.value, 
          targetprice: this.state.targetprice,
          broker: this.state.broker,
          recommendation : this.state.recommendation});
    
          if(duplicateRecord)
          {
            this.setState({showwarning:true})
          }
          else
          {
            this.props.addRecommendations(this.state)
            
            this.props.history.push('/portfolio');
          } 
     }
    render() {
      
        return (
          <div className="container">
            <h5 className="center-align">Add Recommendation</h5>
            <div style={this.state.showwarning ? {} : { display: 'none' }}>
              <div className="card yellow darken-2 center">
                <div className="card-content white-text darken-3">
                  <span><i className="material-icons">warning</i></span><span> Oh! Recommendation is already added</span>
                </div>
              </div>
            </div>

            <div className="row">
            <form onSubmit={this.handleSubmit} className="white">
          <div className="input-field">
           
            <Autocomplete
                        value={ this.state.value }
                        inputProps={{ id: 'stock' ,placeholder: 'Add Stock...' }}
                        wrapperStyle={{ position: 'relative', display: 'inline-block', padding: 10 }}
                        items={ getStocks() }
                        getItemValue={ item => item.stockName }
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
                         key={ item.stockCode } >
                        { item.stockName }
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

const mapStateToProps = (state) =>
{
    return{
        
        authState: state.firebase.auth,
        filteredrecommendationList : state.recommendation.filteredRecommendations,
        
    }
}
const mapDispatchToProps = (dispatch) =>
{
    return{
      addRecommendations: (input) => dispatch(addRecommendations(input))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AddRecommendations);
