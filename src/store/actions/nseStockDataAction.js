
import axios from 'axios'
import underscore from 'underscore'
export const getPortfolioStocksData = () =>
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
            const documentValue = doc.data();

            const stockCode = documentValue.stockCode;
            if(underscore.contains(portfolioStocksCollection,stockCode) === false)
            {
                portfolioStocksCollection.push(stockCode);
            }
            
        });
        
       }).catch((err) => {
       
       });
      
       
       console.log('portfolio collection',portfolioStocksCollection);
        
       portfolioStocksCollection.forEach(element => {
            console.log(element);
        });
        const stockCode ='RELIANCE';
       console.log(stockCode);
        const baseUrl= `https://rajesh-nse-data.herokuapp.com/api/get-quote-info?stockCode=${stockCode}`;
        console.log(baseUrl);
        axios.get(baseUrl).then( response => 
        {
            let stocks = response.data;
            const stockResponse = {
                lastTradedDate : stocks['tradedDate'],
                data : stocks['data']
            }

            dispatch({type: 'GET_PORTFOLIOSTOCKSDATA', stockResponse})
        }).catch( err => {
            console.log(err);
        }
        );
       
    }
};