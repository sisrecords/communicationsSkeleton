import * as actionsTypes from './actions'
import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: "https://react-my-burger-25821.firebaseio.com/"
// });

// export const add = () =>{
//     return {
//         type: actionsTypes.ADD
//     }
// } 

// export const remove = () =>{
//     return {
//         type: actionsTypes.REMOVE
//     }
// }

export const setNotificationTable = (notifacationTableData)=>{
    return{
        type: actionsTypes.SET_NOTIFICATION_TABLE,
        notifications: notifacationTableData
    } 
}

export const initNotificationTable = () =>{
    return dispatch => {
        debugger;
        // axios.get('https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ')
        // .then(resonse => {
        //     console.log(resonse); 
        //     dispatch(setPosts(resonse.data.layerInfo.layers[0].volumeAnnotationsVersion))           
        // })
        // .catch(error => {
        //     // dispatch(fetchIngredientsFailed());
        // });


        //get asychronosly the notifications from db
        let response = {notificationsTableData: [
            {
              "id": "1",
              "action": 2,//1-approved,2-transfered to clearification,...
              "name": "אדם אדם ניסוי",
              "subject": "ניסוי מכם",
              "subjectNum": "36875",
              "actionDesctiption": "הועבר לבירור לשמעון שמעוני, ק״פט",
              "timeStamp": "לפני 7 דקות"
            },
            {
              "id": "2",
              "action": 1,//1-approved,2-transfered to clearification,...
              "name": "אבי הכהן",
              "subject": "יצירת ניסויים",
              "subjectNum": "12345",
              "actionDesctiption": "אישור תחנה, הועבר לשי חן, כלכלן",
              "timeStamp": "לפני 38 דקות"
            },
          ]}
        dispatch(setNotificationTable(response))
    }
}

// layerInfo: {layers: [{layerId: "geo", volumeAnnotationsVersion: "12"}]}
// layers: [{layerId: "geo", volumeAnnotationsVersion: "12"}]
// 0: {layerId: "geo", volumeAnnotationsVersion: "12"}
// layerId: "geo"
// volumeAnnotationsVersion: "12"