import { combineReducers} from 'redux';
import { postReducer } from '../reducers/postReducer';
import { postFilterReducer } from '../reducers/postFilterReducer';


const rootReducer = combineReducers({
    posts: postReducer,
    postFilter: postFilterReducer
});

export default rootReducer;