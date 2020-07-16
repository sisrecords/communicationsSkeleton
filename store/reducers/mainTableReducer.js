import * as actionTypes from "../actions";

export const initialState = {
  mainTableData: [
    {
      id: "325-1",
      description: "ניסויי טיסה לתמיכה",
      project: "002596",
      supplierId: "83551553",
      supplierName: "אלתא מערכות בע״מ",
      kind: "חדש",
      status: "בסבב חתימות",
      oranzation: "מפא״ת",
      classification: "שמור",
      department: "מערכות",
      superDepartment: "522-מכ״מ",
      currency: "ILS",
      amount: "100,000",
      daysLeft: "-6"
    },
    {
      id: "367-2",
      description: "יצירת מל״ט",
      project: "008596",
      supplierId: "83551553",
      supplierName: "אלתא מערכות בע״מ",
      kind: "חדש",
      status: "בסבב חתימות",
      oranzation: "מפא״ת",
      classification: "שמור",
      department: "תקשוב",
      superDepartment: "522-מכ״מ",
      currency: "ILS",
      amount: "100,000",
      daysLeft: "-6"
    },
    {
      id: "526-5",
      description: "ניסויי לויינים",
      project: "002596",
      supplierId: "83551553",
      supplierName: "אלתא מערכות בע״מ",
      kind: "חדש",
      status: "בסבב חתימות",
      oranzation: "מפא״ת",
      classification: "שמור",
      department: "מערכות",
      superDepartment: "522-מכ״מ",
      currency: "ILS",
      amount: "100,000",
      daysLeft: "-6"
    },
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
