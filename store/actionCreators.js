import * as actionsTypes from './actions'

export const setNotificationTable = (notifacationTableData)=>{
    return{
        type: actionsTypes.SET_NOTIFICATION_TABLE,
        notifications: notifacationTableData
    } 
}

export const setMessagesTable = (messagesTableData) =>{
  return{
    type: actionsTypes.SET_MESSAGE_TABLE,
    messages:messagesTableData
  }
}

export const setSmallPieData = (smallPiesData) =>{
  return{
    type: actionsTypes.SET_SMALL_PIE_CHARTS,
    piesData:smallPiesData
  }
}

export const setPieChartData = (pieChartData) =>{
  return{
    type: actionsTypes.SET_SMALL_PIE_CHARTS,
    pieData:pieChartData
  }
}

export const setLineChartData = (lineChartData) =>{
  return{
    type: actionsTypes.SET_LINE_CHART,
    lineData:lineChartData
  }
}

export const setMainTableData = (mainTableData) =>{
  return{
    type: actionsTypes.SET_MAIN_TABLE,
    tableData:mainTableData
  }
}



export const initNotificationTable = () =>{
    return dispatch => {
        //get asychronosly the notifications from db
        let response = [
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
          ]
        dispatch(setNotificationTable(response))
    }
}

export const initMessagesTable = () =>{
  return dispatch => {
      //get asychronosly the notifications from db
      let response = 
      [
          {
            "id": "1",
            "action": 2,//1-approved,2-transfered to clearification,...
            "name": "אייל בנימין",
            "subject": "יצירת מטוסי לחימה",
            "subjectNum": "36875",
            "actionDesctiption": "האם אתה בטוח שאלה",
            "timeStamp": "לפני 7 דקות"
          },
          {
            "id": "2",
            "action": 1,//1-approved,2-transfered to clearification,...
            "name": "ישראל ישראלי",
            "subject": "יצירת מכם 2 ",
            "subjectNum": "12345",
            "actionDesctiption": "אני לא חושב שזה אמור",
            "timeStamp": "לפני 38 דקות"
          }
        ]
      dispatch(setMessagesTable(response))
  }
}
// layerInfo: {layers: [{layerId: "geo", volumeAnnotationsVersion: "12"}]}
// layers: [{layerId: "geo", volumeAnnotationsVersion: "12"}]
// 0: {layerId: "geo", volumeAnnotationsVersion: "12"}
// layerId: "geo"
// volumeAnnotationsVersion: "12"

// [
//   {
//     "id": "1",
//     "action": 2,//1-approved,2-transfered to clearification,...
//     "name": "אייל בנימין",
//     "subject": "יצירת מטוסי לחימה",
//     "subjectNum": "36875",
//     "actionDesctiption": "האם אתה בטוח שאלה",
//     "timeStamp": "לפני 7 דקות"
//   },
//   {
//     "id": "2",
//     "action": 1,//1-approved,2-transfered to clearification,...
//     "name": "ישראל ישראלי",
//     "subject": "יצירת מכם 2 ",
//     "subjectNum": "12345",
//     "actionDesctiption": "אני לא חושב שזה אמור",
//     "timeStamp": "לפני 38 דקות"
//   },
// ]