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
        const stock= uderscore.findWhere(stocks,{stockName : portfolio.value });

        const stockCode= stock.stockCode;
       
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

export const getPortfolioStocks = () =>
{
    return (dispatch, getState, { getFirebase, getFirestore }) =>
    {
        const portfolioStocksCollection = [];
        const fireStore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        
        fireStore.collection('portfolios').where('authorId', '==', authorId).get()
        .then(querysnapshot =>  
        {
        querysnapshot.docs.map(doc =>
        {
            const documentValue = 
            {
                id: doc.id,
                data: doc.data()
            }
            portfolioStocksCollection.push(documentValue);
        });
        dispatch({type: 'GET_PORTFOLIOSTOCKS', portfolioStocksCollection});
       }).catch((err) => {
        dispatch({type: 'GET_PORTFOLIOSTOCKS_ERROR', err});
       });
       
    }
};

