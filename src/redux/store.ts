import {configureStore} from '@reduxjs/toolkit';
import {
    changeMaxValueActionType,
    changeStartValueActionType,
    counterReducer,
    incValueActionType,
    resetValueActionType,
    setValuesActionType
} from "./counter-reducer";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type ActionsType =
    resetValueActionType
    | incValueActionType
    | setValuesActionType
    | changeStartValueActionType
    | changeMaxValueActionType
const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
export default store

