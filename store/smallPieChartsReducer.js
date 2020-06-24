import * as actionTypes from './actions';


const initialState = {
    smallPieChartsData :[
    [
      {
        "id": "82",
        "value": 82,
        "color": "mainColor"
      },
      {
        "id": "18",
        "value": 18,
        "color": "remainingColor"
      }
    ],
    [
      {
        "id": "75",
        "value": 75,
        "color": "mainColor"
      },
      {
        "id": "25",
        "value": 25,
        "color": "remainingColor"
      }
    ],
    [
      {
        "id": "64",
        "value": 64,
        "color": "mainColor"
      },
      {
        "id": "36",
        "value": 36,
        "color": "remainingColor"
      }
    ]
  ]
}

const smallPieChartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SMALL_PIE_CHARTS:
            return {
                ...state,
                smallPieChartsData: action.piesData
            }
        default:
            return state;
    }
}

export default smallPieChartsReducer;



