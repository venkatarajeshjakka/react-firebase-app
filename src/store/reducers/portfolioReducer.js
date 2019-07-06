import underscore from 'underscore'
const initState ={

    portfolioStocks: [],
    loading: false,
    filteredPortfolioStocks: []
}

const portfolioReducer = (state = initState, action) =>
{
    switch(action.type)
    {
        case 'CREATE_PORTFOLIOSTOCK':
        console.log('created Portfolio Stock', action.portfolio)
        return state;

        case 'CREAT_PORTFOLIO_ERROR':
        console.log('create Portfolio error', action.err);
        return state;
        
        case 'GET_PORTFOLIOSTOCKS':
        const stocks= underscore.map(action.portfolioStocksCollection, function(item)
        {
            return {
                id : item.id,
                stockCode : item.data.stockCode,
                stockName: item.data.value,
                quantity: item.data.quantity,
                cost: item.data.cost,
                }
        });
        return {
            ...state,
            loading : true,
            portfolioStocks : action.portfolioStocksCollection,
            filteredPortfolioStocks : stocks
        }
        default:
        return state;
    }
   
}

export default portfolioReducer;