import * as actionsTypes from './actions'
import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: "https://react-my-burger-25821.firebaseio.com/"
// });



export const add = () =>{
    return {
        type: actionsTypes.ADD
    }
}

export const remove = () =>{
    return {
        type: actionsTypes.REMOVE
    }
}

export const setPosts = (posts)=>{
    return{
        type: actionsTypes.SET_POSTS,
        posts: posts
    }
}

export const initPosts = () =>{
    return dispatch => {
        axios.get('https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ')
        .then(resonse => {
            console.log(resonse); 
            dispatch(setPosts(resonse.data.layerInfo.layers[0].volumeAnnotationsVersion))           
        })
        .catch(error => {
            // dispatch(fetchIngredientsFailed());
        });

    }
}

// layerInfo: {layers: [{layerId: "geo", volumeAnnotationsVersion: "12"}]}
// layers: [{layerId: "geo", volumeAnnotationsVersion: "12"}]
// 0: {layerId: "geo", volumeAnnotationsVersion: "12"}
// layerId: "geo"
// volumeAnnotationsVersion: "12"