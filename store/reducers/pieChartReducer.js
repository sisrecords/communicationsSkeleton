
import * as actionTypes from '../actions';


const initialState = {
    pieChartData: [
        {
          "id": "15",
          "label": "תקין",
          "value": 15,
        },
        {
          "id": "8",
          "label": "קרוב לחריגה",
          "value": 8,
        },
        {
          "id": "2",
          "label": "חורג",
          "value": 2,
        },
      ]
}


const pieChartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PIE_CHART:
            return {
                ...state,
                pieChartData: action.pieData
            }
        default:
            return state;
    }
}

export default pieChartReducer;



