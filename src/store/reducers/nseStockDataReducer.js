
const initState ={

    lastTradedDate : '',
    data : []
}

const nseStockDataReducer = (state = initState, action) =>
{
    switch(action.type)
    {
       
        case 'GET_PORTFOLIOSTOCKSDATA':
        
        return {
            ...state,
            lastTradedDate : action.stockResponse.tradedDate,
            data : action.stockResponse.data
        }
        default:
        return state;
    }
   
}

export default nseStockDataReducer;