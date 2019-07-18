import underscore from 'underscore'

const initState ={

    recommendations: [],
    loading: false,
    filteredRecommendations: []
}
var setPersistantState = (key,value) =>
{
    if(!sessionStorage.getItem(key))
    {
        sessionStorage.setItem(key,JSON.stringify(value));
    }
}

var getPersistantState = (key) =>
{
    if(sessionStorage.getItem(key))
    {
        var parsedData = JSON.parse(sessionStorage.getItem(key));
        return parsedData;
    }else
    {
        return null;
    }
}
const recommendationReducer = (state = initState, action) =>
{
    switch(action.type)
    {
        case 'CREATE_RECOMMENDATION':
        console.log('Added recommendation', action.input)
        return state;

        case 'CREAT_RECOMMENDATION_ERROR':
        console.log('add recommendation error', action.err);
        return state;
        
        case 'GET_RECOMMENDATION':
        const stocks= underscore.map(action.recommendationCollections, function(item)
        {
            
            return {
                id : item.id,
                stockCode : item.data.stockCode,
                stockName: item.data.stockName,
                targetprice: item.data.targetprice,
                recommendation: item.data.recommendation,
                broker: item.data.broker,
                date: item.data.date,
            }
        });
        setPersistantState('recommendations', stocks);
        return {
            ...state,
            loading : true,
            recommendations : action.recommendationCollections,
            filteredRecommendations : stocks
        }
        default:
        var persistedData = getPersistantState('recommendations');
        if(persistedData !=null)
        {
            return {
                ...state,
                filteredRecommendations : persistedData
            }
        }
        return state;
    }
   
}

export default recommendationReducer;