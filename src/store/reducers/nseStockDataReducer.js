
const initState ={
    data : []
}

const nseStockDataReducer = (state = initState, action) =>
{
    switch(action.type)
    {
       
        case 'GET_PORTFOLIOSTOCKSDATA':
        
        return {
            ...state,
            data : action.nseData
        }
        default:
        return state;
    }
   
}

export default nseStockDataReducer;