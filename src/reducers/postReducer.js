//switchのcase内で使うためにactionの定数をインポート
import {
    CREATE_POST,
    DELETE_POST,
    LIKE_POST_TOGGLE
} from '../actions/postActionCreator';
import Post from '../models/Post';

// Reducer→actionとstateを受け取り新しいstateを返す関数
export const postReducer = (state = [], action) => {
    switch(action.type){
        case CREATE_POST:
            const post = new Post(action.name,action.text,action.image);
            // Reducerは純粋関数の為、引数の値を直接変更するようなことはしてはいけない→stateをスプレッド構文でコピーする
            return [
                ...state,
                post
            ];

        case DELETE_POST:
            return state.filter((post, index) => {
                return action.id !== post.id; 
            }); 
        
        case LIKE_POST_TOGGLE:
            return state.map((post,index) => {
                if(action.id !== post.id){
                    return post;
                }
                const targetPost = new Post(post.name,post.text,post.image);
                if(!post.hasLiked()){
                    targetPost.likeToggle();
                }
                return targetPost;
            });
            
        default:
            return state;
    }
};
