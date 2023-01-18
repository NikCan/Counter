import {ActionsType} from "./store";

const initialState: InitialStateType = {
    startValue: 0,
    currentValue: 0,
    maxValue: 10,
    tempMaxValue: 10,
    tempStartValue: 0,
    message: ""
}
export const counterReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "RESET":
            return {...state, currentValue: state.startValue}
        case "INC":
            return {...state, currentValue: state.currentValue + 1}
        case "SET":
            return {
                ...state,
                currentValue: state.tempStartValue,
                maxValue: state.tempMaxValue,
                startValue: state.tempStartValue,
                message: ""
            }
        case "CHANGE-START-VALUE":
            return {
                ...state,
                tempStartValue: action.payload.tempStartValue,
                message: action.payload.tempStartValue < 0 || action.payload.tempStartValue >= state.tempMaxValue ? "Incorrect value!" : "enter values and press 'set'"
            }
        case "CHANGE-MAX-VALUE":
            return {
                ...state,
                tempMaxValue: action.payload.tempMaxValue,
                message: action.payload.tempMaxValue <= state.tempStartValue ? "Incorrect value!" : "enter values and press 'set'"
            }
        default:
            return state
    }
}

// actions
export const resetValueAC = () => ({type: 'RESET'} as const)
export const incValueAC = () => ({type: 'INC'} as const)
export const setValuesAC = () => ({type: 'SET'} as const)
export const changeStartValuesAC = (tempStartValue: number) => ({
    type: 'CHANGE-START-VALUE',
    payload: {
        tempStartValue
    }
} as const)
export const changeMaxValuesAC = (tempMaxValue: number) => ({
    type: 'CHANGE-MAX-VALUE',
    payload: {
        tempMaxValue
    }
} as const)

// types
export type resetValueActionType = ReturnType<typeof resetValueAC>
export type incValueActionType = ReturnType<typeof incValueAC>
export type setValuesActionType = ReturnType<typeof setValuesAC>
export type changeStartValueActionType = ReturnType<typeof changeStartValuesAC>
export type changeMaxValueActionType = ReturnType<typeof changeMaxValuesAC>

export type InitialStateType = {
    startValue: number
    currentValue: number
    maxValue: number
    tempStartValue: number
    tempMaxValue: number
    message: string
}