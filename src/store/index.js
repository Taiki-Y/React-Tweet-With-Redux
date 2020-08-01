import { createStore } from 'redux';
import  rootReducer  from '../reducers/index';
// createStoreメソッドの第一引数ににrootReducerを渡す
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;