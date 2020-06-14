import * as actionTypes from './actions';


const initialState = {
    numOfPosts:null
}


const reducer = (state = initialState,action)  =>{
    switch (action.type) {
        case actionTypes.ADD:
            return{
                ...state,
                numOfPosts:+state.numOfPosts + 1
            }   
        case actionTypes.REMOVE:
        return{
            ...state,
            numOfPosts:+state.numOfPosts - 1
        }    
        case actionTypes.SET_POSTS:
        return{
            ...state,
            numOfPosts: action.posts
        }
        default:
            return state;
    }
}

export default reducer;

