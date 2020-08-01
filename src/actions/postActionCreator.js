//ActionCreatorが作成するActionのtypeに渡される文字列を定数に格納しておく→Reducerのswitch処理の条件で使用する為
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const LIKE_POST_TOGGLE = 'LIKE_POST_TOGGLE';


export const createPost = (name,text,image) => {
    return {
        type: CREATE_POST,
        name,
        text,
        image
    }
};

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id
    }
};

export const likePostToggle = (id) => {
    return {
        type: LIKE_POST_TOGGLE,
        id
    }
};