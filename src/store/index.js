import { createStore } from 'redux';
import { rootReducer } from '../reducers/index';
// createStoreメソッドの第一引数ににrootReducerを渡す
const store = createStore(
    rootReducer
);

export default store;