import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActionCreator'
import './Form.css';

const Form = (props) => {
    const [name,setName] = useState('');
    const [text,setText] = useState('');
    const [image,setImage] = useState('');
    // text→実際に値が格納されるもの
    //setText→（setStateと同じく）、textの値を更新する関数
    // useState('') →　textのデフォルト値をセット

    const onChangeHandlerForName = (event) => {
        setName(event.target.value)
    };

    const onChangeHandlerForText = (event) => {
        setText(event.target.value);
    };

    const onChangeHandlerForImage = (event) => {
        setImage(event.target.value);
    };

    const onClickButton = () => {
        if( name && text && image){
        props.createPost(name,text,image);
        setName('');
        setText('');
        setImage('');
        }else{
            alert('投稿者名、テキスト、画像URLの入力は必須です。');
        }
    }

    
    return(
        <div className="whole_wrapper">
            <h1>React Tweet(With Redux)</h1>
            <div className="form_space">
                <div className="form_name">
                    <label htmlFor="name">投稿者名</label>
                    <input id="name" name="name" value={name} onChange={onChangeHandlerForName}/>
                </div>
                <div className="form_text">
                    <label htmlFor="text">本文</label>
                    {/* <textarea id="text" name="text" cols="30" rows="5" onChange={onChangeHandlerForText}></textarea> */}
                    <textarea id="text" name="text" value={text} cols="30" rows="5" onChange={onChangeHandlerForText}/>
                </div>
                <div className="form_image">
                    <label htmlFor="image">イメージ</label>
                    <input id="image" name="image" value={image} onChange={onChangeHandlerForImage}/>
                </div>
                <button onClick={onClickButton}>投稿</button>
            </div>
        </div>
    )
    
}

//mapDispatchToPropsは関数、もしくはオブジェクトをセットする。
//関数をセットする場合は第一引数にdispatchを受け取る
//返り値はオブジェクト→今回はオブジェクトの中に関数を定義している
//このmapDispatchTopropsをconnectの第二引数に渡すことで、props.createPostでpropsからcreatePostを実行できるようになる
// →createPostを通じてStoreのstateを更新できる（dispatch(action)を行っているから)
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (name,text,image) => {
            const action = createPost(name,text,image);
            //dispatchメソッドはactionを引数に受け取り、actionをstoreに渡すメソッド。こうすることにより、storeのstateを更新することができる。
            dispatch(action);
        }
    }
};
// 短縮形(mapDispatchToPropsにオブジェクトをセットした場合)
// const mapDispatchToProps =　{ createPost };

// コンテナーを作成するためには、connectメソッドを使う
//connectメソッドの返り値は関数なので、その関数の引数に「props.~」としてstoreのstateやstateを更新するコールバック関数を渡せるようにするコンポーネントをセットする
export default connect(
    null,
    mapDispatchToProps
)(Form);
