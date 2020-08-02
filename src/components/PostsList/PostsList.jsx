import React from 'react';
import { connect } from 'react-redux';
import {
    deletePost,
    likePostToggle
} from '../../actions/postActionCreator';
import {
    LIKED_POSTS
} from '../../actions/postFilterActionCreator';
import "./PostsList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from  '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames';


const PostsList = (props) => {
    const PostItems = props.posts.map((post,index) => {

        return(
            <div key={index} className="post">
                <div className="image">
                    <img src={post.image} alt="image"/>
                </div>
                <h3>{post.name}</h3>
                <p>{post.text}</p>
                <div>
                    {renderLikeButton(props,post)}
                    <span className="delete_button" onClick= {() => {
                        confirmDelete(props,post)
                    }}>
                        削除する
                    </span>
                </div>
            </div>
        )
    });

    return(
        <div className="posts_list">{ PostItems }</div>
    );
};

const renderLikeButton = (props, post) => {
    const liked_classname = post.hasLiked() ? 'liked' : '';
    const liked_class = classNames(
        'like',
        // liked_classname
        {'liked' : post.hasLiked()}
    );

    return (
        <span className={liked_class} onClick={() => {
            props.likePostToggle(post.id)
        }}>
            <FontAwesomeIcon icon={faThumbsUp} />
        </span>
    );
};

const confirmDelete = (props, post) => {
    if(window.confirm('投稿を削除しますか？')){
        props.deletePost(post.id);
    }

}

//mapStatetoProps = 返り値にオブジェクトを返す関数（Storeのstateをprops経由でコンポーネントに渡す際にどのような形でコンポーネントに渡すか定義する関数）
//第一引数にstoreのstateを受け取る
//このmapStateTopropsをconnectの第一引数に渡すことで、props.postsでpropsを経由してsotreのstateで管理している値（今回の場合はprops）を使うことができる

const mapStatetoProps = (state) => {
    let posts;
    if(state.postFilter == LIKED_POSTS){
        posts = state.posts.filter(post => post.hasLiked());
    }else{
        posts = [...state.posts]
    }
    return { posts };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // createPost: (name,text,image) => {
        //     const action = createPost(name,text,image);
        //     dispatch(action);
        // }
        deletePost: (id) => {
            const action = deletePost(id);
            dispatch(action);
        },
        likePostToggle: (id) => {
            const action = likePostToggle(id);
            dispatch(action);
        }
    };
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(PostsList);
