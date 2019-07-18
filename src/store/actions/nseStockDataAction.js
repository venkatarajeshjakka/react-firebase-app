
import axios from 'axios'
import underscore from 'underscore'
import { nseStockMapping } from '../../data/stockData'
export const getPortfolioStocksData = () =>
{
    return (dispatch, getState, { getFirebase, getFirestore }) =>
    {
        var StocksCollection = [];
        var portfolioStocksCollection = [];
        const fireStore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        let stockCode ='';
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

            var stockCodeValue = documentValue.data.stockCode;
            if(underscore.contains(portfolioStocksCollection,stockCodeValue) === false)
            {
                StocksCollection.push(stockCodeValue);
            }
           
            
        });
        var modifiedCollection = underscore.map(StocksCollection, function(val)
        {
            return val+'.NS';
        });
        
        dispatch({type: 'GET_PORTFOLIOSTOCKS', portfolioStocksCollection});
        stockCode = modifiedCollection.join();
       }).then( res =>
        {
            const baseUrl= `https://rajesh-nse-data.herokuapp.com/api/get-nse-stocks?stockCode=${stockCode}`;
            console.log(baseUrl);
            axios.get(baseUrl).then( response => 
            {
                let stocks = response.data;
                var nseData = nseStockMapping(stocks);
                dispatch({type: 'GET_PORTFOLIOSTOCKSDATA', nseData})
            }).catch( err => {
                console.log(err);
            }
            );
        }).catch((err) => {
       
       });
    }
};

export const getIndicesData = () =>
{
    return (dispatch, getState) =>
    {
       
        let stockCode ='^NSEI,^BSESN';
        
        const baseUrl= `https://rajesh-nse-data.herokuapp.com/api/get-nse-stocks?stockCode=${stockCode}`;
        console.log(baseUrl);
        axios.get(baseUrl).then( response => 
        {
            let stocks = response.data;
            var nseData = nseStockMapping(stocks);
            dispatch({type: 'GET_INDICIES_STOCKSDATA', nseData})
        }).catch( err => {
                console.log(err);
            }
        );
    }
};