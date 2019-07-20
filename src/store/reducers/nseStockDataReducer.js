import { getPersistantState,setPersistantState, updatePersistantState} from '../../utility/sessionStorage'
const initState ={
    data : [],
    indiciesData : []
}

const nseStockDataReducer = (state = initState, action) =>
{
    switch(action.type)
    {
       
        case 'GET_PORTFOLIOSTOCKSDATA':
        setPersistantState('nsedata', action.nseData);
        return {
            ...state,
            data : action.nseData
        }

        case 'GET_INDICIES_STOCKSDATA':

        return{
            ...state,
            indiciesData: action.nseData
        }
        case 'UPDATE_PORTFOLIOSTOCKSDATA':
        updatePersistantState('nsedata',action.finalData);
        return{
            ...state,
            data : action.finalData
        }
        default:
        var persistedData = getPersistantState('nsedata');
        return {
            ...state,
            data : persistedData
        }
    }
   
}

export default nseStockDataReducer;