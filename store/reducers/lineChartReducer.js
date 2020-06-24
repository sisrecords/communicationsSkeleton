import * as actionTypes from '../actions';

const initialState = {
    lineChartData: [
        {
          "id": "חורג",
          "color": "red",
          "data": [
            {
              "x": 0,
              "y": 1.5
            },
            {
              "x": 5,
              "y": 3
            },
            {
              "x": 10,
              "y": 2.5
            },
            {
              "x": 15,
              "y": 2
            },
            {
              "x": 20,
              "y": 1
            },
            {
              "x": 25,
              "y": 1
            },
            {
              "x": 30,
              "y": 0.5
            },
            {
              "x": 35,
              "y": 0
            }
          ]
        },
        {
          "id": "כמעט חורג",
          "color": "orange",
          "data": [
            {
              "x": 0,
              "y": 3
            },
            {
              "x": 5,
              "y": 2
            },
            {
              "x": 10,
              "y": 1
            },
            {
              "x": 15,
              "y": 0.5
            },
            {
              "x": 20,
              "y": 2
            },
            {
              "x": 25,
              "y": 3
            },
            {
              "x": 30,
              "y": 3
            },
            {
              "x": 35,
              "y": 3.5
            }
          ]
        },
        {
          "id": "תקין",
          "color": "green",
          "data": [
            {
              "x": 0,
              "y": 1
            },
            {
              "x": 5,
              "y": 0.5
            },
            {
              "x": 10,
              "y": 1
            },
            {
              "x": 15,
              "y": 2
            },
            {
              "x": 20,
              "y": 2
            },
            {
              "x": 25,
              "y": 3
            },
            {
              "x": 30,
              "y": 3.5
            },
            {
              "x": 35,
              "y": 4
            }
          ]
        }
      ]
}


const lineChartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LINE_CHART:
            return {
                ...state,
                lineChartData: action.lineData
            }
        default:
            return state;
    }
}

export default lineChartReducer;