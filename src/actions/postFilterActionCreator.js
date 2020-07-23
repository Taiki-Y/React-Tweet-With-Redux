export const ALL_POSTS = "ALL_POSTS";
export const LIKED_POSTS = "LIKED_POSTS";

export const allPosts = () => {
    return {
        type: ALL_POSTS
    }
};

export const likedPosts = () => {
    return {
        type: LIKED_POSTS
    }
};