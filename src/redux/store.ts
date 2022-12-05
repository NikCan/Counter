import {configureStore} from '@reduxjs/toolkit';
import {ActionType, counterReducer} from "./counter-reducer";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type ActionsType = ActionType
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});


