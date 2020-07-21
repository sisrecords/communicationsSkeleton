import * as actionsTypes from "./actions";
import { initialState } from "./reducers/mainTableReducer";
export const setNotificationComponent = notifacationTableData => {
  return {
    type: actionsTypes.SET_NOTIFICATION_COMPONENT,
    notifications: notifacationTableData
  };
};

export const setMessagesTable = messagesTableData => {
  return {
    type: actionsTypes.SET_MESSAGE_COMPONENT,
    messages: messagesTableData
  };
};

export const setSmallPieData = smallPiesData => {
  return {
    type: actionsTypes.SET_SMALL_PIE_CHARTS,
    piesData: smallPiesData
  };
};

export const setPieChartData = pieChartData => {
  return {
    type: actionsTypes.SET_SMALL_PIE_CHARTS,
    pieData: pieChartData
  };
};

export const setLineChartData = lineChartData => {
  return {
    type: actionsTypes.SET_LINE_CHART,
    lineData: lineChartData
  };
};

export const setMainTableData = mainTableData => {
  return {
    type: actionsTypes.SET_MAIN_TABLE,
    tableData: mainTableData
  };
};

export const setTags = tagsData => {
  return {
    type: actionsTypes.SET_TAGS,
    tags: tagsData
  };
};

export const setSuggestionTags = suggestionData => {
  return {
    type: actionsTypes.SET_SUGGESTIONS_TAGS,
    suggestions: suggestionData
  };
};

export const initNotificationComponent = () => {
  return dispatch => {
    //get asychronosly the notifications from db
    let response = [
      {
        id: "1",
        action: 2, //1-approved,2-transfered to clearification,...
        name: "אדם אדם ניסוי",
        subject: "ניסוי מכם",
        subjectNum: "36875",
        actionDesctiption: "הועבר לבירור לשמעון שמעוני, ק״פט",
        timeStamp: "לפני 7 דקות"
      },
      {
        id: "2",
        action: 1, //1-approved,2-transfered to clearification,...
        name: "אבי הכהן",
        subject: "יצירת ניסויים",
        subjectNum: "12345",
        actionDesctiption: "אישור תחנה, הועבר לשי חן, כלכלן",
        timeStamp: "לפני 38 דקות"
      }
    ];
    dispatch(setNotificationComponent(response));
  };
};

export const initMessagesComponent = () => {
  return dispatch => {
    //get asychronosly the notifications from db
    let response = [
      {
        id: "1",
        action: 2, //1-approved,2-transfered to clearification,...
        name: "אייל בנימין",
        subject: "יצירת מטוסי לחימה",
        subjectNum: "36875",
        actionDesctiption: "האם אתה בטוח שאלה",
        timeStamp: "לפני 7 דקות"
      },
      {
        id: "2",
        action: 1, //1-approved,2-transfered to clearification,...
        name: "ישראל ישראלי",
        subject: "יצירת מכם 2 ",
        subjectNum: "12345",
        actionDesctiption: "אני לא חושב שזה אמור",
        timeStamp: "לפני 38 דקות"
      }
    ];
    dispatch(setMessagesTable(response));
  };
};
export const initMainTable = tags => {
  return dispatch => {
    //send tags to db and get back data

    //
    let response = initialState.mainTableData;
    //local filter - this needs to be in the server unless we have the entire data
    let delimiter = ":";
    tags.forEach(tag => {
      if (tag.indexOf(delimiter > -1)) {
          let untilDelimiterIndex = tag.indexOf(':');
          //the key of the tag
          let keyTag = tag.slice(0,untilDelimiterIndex);
          //the value of the tag
          tag = tag.slice(-untilDelimiterIndex);
      }
      response = response.filter(singleObjectInResponse => {
        for (var key in singleObjectInResponse) {
          if (typeof singleObjectInResponse[key] == "string") {
            if (singleObjectInResponse[key].toLowerCase().includes(tag.toLowerCase())) {
              return true;
            }
          }
        }
      });
    });
    dispatch(setMainTableData(response));
  };
};
