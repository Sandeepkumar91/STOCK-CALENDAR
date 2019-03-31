import DataReducer from '../Reducers/DataReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    data: DataReducer
})
export default rootReducer