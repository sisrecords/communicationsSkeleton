import * as actionTypes from "../actions";

const initialState = {
  mainTableData: [
    { name: "adam", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "baranes", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 }
  ]
};

const mainTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MAIN_TABLE:
      return {
        ...state,
        mainTableData: action.tableData
      };
    default:
      return state;
  }
};

export default mainTableReducer;
