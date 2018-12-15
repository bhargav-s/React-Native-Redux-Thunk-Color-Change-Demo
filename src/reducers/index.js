import { combineReducers } from 'redux';
import todos from './todos';
import visibility from './visibility';
import color from "./color";

export default combineReducers({
    todos,
    visibility,
    color
})