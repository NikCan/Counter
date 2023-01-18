import {combineReducers, compose, legacy_createStore} from '@reduxjs/toolkit';
import {
    changeMaxValueActionType,
    changeStartValueActionType, counterReducer,
    incValueActionType,
    resetValueActionType,
    setValuesActionType
} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStorage-utils";

// for Profiler ext
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store
const rootReducer = combineReducers(
    {
        counter: counterReducer
    },
)
const store = legacy_createStore(rootReducer, loadState(), composeEnhancers())

// for localStorage
store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

// types
export type RootStateType = ReturnType<typeof store.getState>;
export type ActionsType =
    | resetValueActionType
    | incValueActionType
    | setValuesActionType
    | changeStartValueActionType
    | changeMaxValueActionType

export default store

