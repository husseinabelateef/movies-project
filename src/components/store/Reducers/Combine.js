import { combineReducers } from "redux";
import languageReducer from "./Language";
import loaderReducer from "./Loader";

const combine = combineReducers(
    {
        language: languageReducer,
        loader: loaderReducer
    });

export default combine;