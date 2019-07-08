
import axios from 'axios'
import underscore from 'underscore'
export const getPortfolioStocksData = () =>
{
    return (dispatch, getState, { getFirebase, getFirestore }) =>
    {
        const portfolioStocksCollection = [];
        const fireStore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        let stockCode ='';
        fireStore.collection('portfolios').where('authorId', '==', authorId).get()
        .then(querysnapshot =>  
        {
        querysnapshot.docs.map(doc =>
        {
            const documentValue = doc.data();

            var stockCodeValue = documentValue.stockCode;
            if(underscore.contains(portfolioStocksCollection,stockCodeValue) === false)
            {
                portfolioStocksCollection.push(stockCodeValue);
            }
            
        });
        var modifiedCollection = underscore.map(portfolioStocksCollection, function(val)
        {
            return val+'.NS';
        })
        stockCode = modifiedCollection.join();
        
       }).then( res =>
        {
            const baseUrl= `https://rajesh-nse-data.herokuapp.com/api/get-nse-stocks?stockCode=${stockCode}`;
            console.log(baseUrl);
            axios.get(baseUrl).then( response => 
            {
                //let stocks = response.data;
                //const stockResponse = {
                    //lastTradedDate : stocks['tradedDate'],
                    //data : stocks['data']
                //}
                console.log(response.data);
                //dispatch({type: 'GET_PORTFOLIOSTOCKSDATA', stockResponse})
            }).catch( err => {
                console.log(err);
            }
            );
        }).catch((err) => {
       
       });
      
       
       
       
       
    }
};