import {setPersistantState} from '../../utility/sessionStorage'
const initState ={
    data : [],
    indiciesData : [],
    recommendationStockData : []
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

        case 'UPDATE_PORTFOLIOSTOCKSDATA' :
        setPersistantState('nseStockData',action.finalData)
        return{
            ...state,
            recommendationStockData : action.finalData
        }
        default:
        return state;
    }
   
}

export default nseStockDataReducer;