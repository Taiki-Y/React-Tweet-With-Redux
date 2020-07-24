import {
    ALL_POSTS,
    LIKED_POSTS
} from '../actions/postFilterActionCreator';

export const postFilterReducer = (state = ALL_POSTS, action) => {
    switch(action.type){
        case ALL_POSTS:
            return ALL_POSTS;
        
        case LIKED_POSTS:
            return LIKED_POSTS;

        default:
            return state;
    }
};