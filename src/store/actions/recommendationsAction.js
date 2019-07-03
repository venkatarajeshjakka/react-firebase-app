import { getStocks } from '../../data/stockData'; 
import uderscore from 'underscore';

export const getRecommendations = () =>
{
    return (dispatch, getState, { getFirebase, getFirestore }) =>
    {
        const recommendationCollections = [];
        const fireStore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        console.log(authorId);
        fireStore.collection('recommendations').where('authorId', '==', authorId).get()
       .then(querysnapshot =>  
       {
        querysnapshot.docs.map(doc =>
        {
            const documentValue = 
            {
                id: doc.id,
                data: doc.data()
            }
            recommendationCollections.push(documentValue);
        });
        dispatch({type: 'GET_RECOMMENDATION', recommendationCollections});
       }).catch((err) => {
        dispatch({type: 'GET_RECOMMENDATION_ERROR', err});
       });
       
    }
};
export const addRecommendations = (input) =>
{
    return (dispatch, getState, { getFirebase, getFirestore }) =>
    {
        //make async call to db
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const stocks = getStocks();
        const stock= uderscore.findWhere(stocks,{name : input.value });

        const stockCode= stock.abbr;
       
        fireStore.collection('recommendations').add({
            stockName: input.value,
            stockCode: stockCode,
            targetprice: input.targetprice,
            recommendation: input.recommendation,
            broker: input.broker,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            date: input.date,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_RECOMMENDATION', input});
        }).catch((err) => {
            dispatch({type: 'CREAT_RECOMMENDATION_ERROR', err});
        })
        
    }
};

