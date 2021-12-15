import { DELETE_CONTENT, INIT_CONTENT_LIST, TOGGLE_STATUS, UPDATE_CONTENT_LIST } from "../constants/constants";

const todoReducer = (state = {contentList: []}, action) => {
    switch(action.type) {
        case UPDATE_CONTENT_LIST:
            return {...state, contentList: [...state.contentList, action.payload]};
        case TOGGLE_STATUS:
            return {
                ...state, 
                contentList: state.contentList.map( 
                    (content) => content.id === action.payload.id ? {...content, done: action.payload.done}: content)
            }
        case DELETE_CONTENT:
            return {
                ...state,
                contentList: state.contentList.filter(function(content) { 
                    return content.id !== action.payload;
                })
            }
        case INIT_CONTENT_LIST:
            return {
                ...state,
                contentList: action.payload
            }
        default:
            return state;
    }
};

export default todoReducer;