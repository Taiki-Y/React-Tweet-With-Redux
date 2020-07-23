let id = 1;

class Post {
    constructor(name,text,image) {
        this._id = id++;
        this._name = name;
        this._text = text;
        this._image = image;
        this._liked = false
    };
    
    // オブジェクトの値（プロパティ）の値を参照するときはゲッタ（関数）を実行する
    // オブジェクトの値（プロパティ）の値を変更するときはセッタ（関数）を実装する
    get id(){
        return this._id;
    };

    get name(){
        return this._name;
    };

    get text(){
        return this._text;
    };

    get image(){
        return this._image;
    }

    hasLiked(){
        return this._liked;
    }

    likeToggle(){
        this._liked = !this._liked;
    }
};

export default Post;