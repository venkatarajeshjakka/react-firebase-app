
const initState ={
    data : [],
    indiciesData : []
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

        case 'GET_INDICIES_STOCKSDATA':

        return{
            ...state,
            indiciesData: action.nseData
        }
        default:
        return state;
    }
   
}

export default nseStockDataReducer;