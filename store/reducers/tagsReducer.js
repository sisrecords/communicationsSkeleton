import * as actionTypes from "../actions";

export const initialState = {
  tags: [],
  suggestions: {
    singleLayerSuggestions: ["adam1", "adam2", "ben1", "ben2"],
    doubleLayerSuggestions: {
      orel1: ["orel2", "orel3"],
      mor1:["mor2","mor3"]
    }
  }
};

const tagsReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case actionTypes.SET_SUGGESTIONS_TAGS:
      return {
        ...state,
        suggestions: action.suggestions
      };
    case actionTypes.SET_TAGS:
      return {
        ...state,
        tags: action.tags
      };
    default:
      return state;
  }
};

export default tagsReducer;
