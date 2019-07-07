import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import portfolioReducer from './portfolioReducer'
import recommendationReducer from './recommendationReducer'
import nseStockDataReducer from './nseStockDataReducer'

const rootReducer = combineReducers({
    auth : authReducer,
    projects: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    portfolio: portfolioReducer,
    recommendation: recommendationReducer,
    nseData: nseStockDataReducer
});

export default rootReducer;