import underscore from 'underscore'

const initState ={

    recommendations: [],
    loading: false,
    filteredRecommendations: []
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
                
            }
        });
        return {
            ...state,
            loading : true,
            recommendations : action.recommendationCollections,
            filteredRecommendations : stocks
        }
        default:
        return state;
    }
   
}

export default recommendationReducer;