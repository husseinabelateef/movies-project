import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combine from './Reducers/Combine';
const store = createStore (combine,composeWithDevTools());
export default store;