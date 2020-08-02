import React from 'react';
import { connect } from 'react-redux';
import { allPosts, likedPosts } from '../../actions/postFilterActionCreator';
import './Filter.css';

const Filter = (props) => {
    return (
        <div className="post_filter">
            <span　className="filter_all filter_button" onClick={props.allPosts}>全ての投稿を表示</span>
            <span className="filter_liked filter_button" onClick={props.likedPosts} >いいねを押した投稿を表示</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return{
        allPosts: () => {
            const action = allPosts();
            dispatch(action);
        },
        likedPosts: () => {
            const action = likedPosts();
            dispatch(action);
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Filter);

