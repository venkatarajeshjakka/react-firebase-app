const initState ={

    projects: [
        {
            stockName: '',
            stockCode: '',
            quantity: '',
            cost: '',
            authorFirstName: '',
            authorLastName: '',
            authorId: '',
            createdAt: new Date()
        }
    ]
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
        
        default:
        return state;
    }
   
}

export default portfolioReducer;