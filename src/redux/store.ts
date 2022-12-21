import {combineReducers, compose, legacy_createStore} from '@reduxjs/toolkit';
import {
    changeMaxValueActionType,
    changeStartValueActionType, counterReducer,
    incValueActionType,
    resetValueActionType,
    setValuesActionType
} from "./counter-reducer";

export type RootStateType = ReturnType<typeof store.getState>;
export type ActionsType =
    resetValueActionType
    | incValueActionType
    | setValuesActionType
    | changeStartValueActionType
    | changeMaxValueActionType

const rootReducer = combineReducers(
    {
        counter: counterReducer
    },
)

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers())
export default store

