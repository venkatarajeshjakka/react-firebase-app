import { getStocks } from '../../data/stockData'; 
import uderscore from 'underscore';

export const createPortfolioStock = (portfolio) =>
{
    return (dispatch, getState, { getFirebase, getFirestore }) =>
    {
        //make async call to db
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const stocks = getStocks();
        const stock= uderscore.findWhere(stocks,{name : portfolio.value });

        const stockCode= stock.abbr;
       
        fireStore.collection('portfolios').add({
            stockName: portfolio.value,
            stockCode: stockCode,
            quantity: portfolio.quantity,
            cost: portfolio.cost,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            date: portfolio.date,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PORTFOLIOSTOCK', portfolio});
        }).catch((err) => {
            dispatch({type: 'CREAT_PORTFOLIO_ERROR', err});
        })
        
    }
};

