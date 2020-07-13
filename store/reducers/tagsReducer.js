import * as actionTypes from '../actions';


export const initialState = {
        tags:[
            {
                id: "1",
                tagName: "adam"
            },
            {
                id: "2",
                tagName: "adam"
            },
            {
                id: "3",
                tagName: "ben"
            }
        ],
        suggestions:[
            {
                id: "3",
                tagName: "adamB"
            },
            {
                id: "4",
                tagName: "BenB"
            }

        ]
}

const tagsReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case actionTypes.SET_SUGGESTIONS_TAGS:
            return {
                ...state,
                suggestions: action.suggestions
            }
        case actionTypes.SET_TAGS:
            return {
                ...state,
                tags: action.tags
            }
        default:
            return state;
    }
}

export default tagsReducer;



