import * as actionTypes from './actions';


const initialState = {
    notificationsTableData: [{
        "id": "1",
        "action": 2,//1-approved,2-transfered to clearification,...
        "name": "צבי משה",
        "subject": "ניסוי מכם",
        "subjectNum": "36875",
        "actionDesctiption": "הועבר לבירור לשמעון שמעוני, ק״פט",
        "timeStamp": "לפני 7 דקות"
    }],
    messagesTableData: [
        {
            "id": "1",
            "action": 2,//1-approved,2-transfered to clearification,...
            "name": "מידע התחלתיייי",
            "subject": "יצירת מטוסי לחימה",
            "subjectNum": "36875",
            "actionDesctiption": "האם אתה בטוח שאלה",
            "timeStamp": "לפני 7 דקות"
        }
    ]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MESSAGE_TABLE:
            return {
                ...state,
                messagesTableData: action.messages
            }
        case actionTypes.SET_NOTIFICATION_TABLE:
            return {
                ...state,
                notificationsTableData: action.notifications
            }
        default:
            return state;
    }
}

export default reducer;

