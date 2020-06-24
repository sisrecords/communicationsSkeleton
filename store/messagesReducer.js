import * as actionTypes from './actions';
const initialState = {
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


const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MESSAGE_TABLE:
            return {
                ...state,
                messagesTableData: action.messages
            }
        default:
            return state;
    }
}

export default messageReducer;

