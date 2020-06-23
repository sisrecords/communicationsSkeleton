import * as actionTypes from './actions';


const initialState = {
    notificationsTableData:null
}


const reducer = (state = initialState,action)  =>{
    switch (action.type) {
        // case actionTypes.ADD:
        //     return{
        //         ...state,
        //         numOfPosts:+state.numOfPosts + 1
        //     }   
        // case actionTypes.REMOVE:
        // return{
        //     ...state,
        //     numOfPosts:+state.numOfPosts - 1
        // }    
        case actionTypes.SET_NOTIFICATION_TABLE:
        return{
            ...state,
            notificationsTableData: action.notifications
        }
        default:
            return state;
    }
}

export default reducer;

