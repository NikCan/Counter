import {ActionsType} from "./store";

export type resetValueActionType = ReturnType<typeof resetValueAC>
export type incValueActionType = ReturnType<typeof incValueAC>
export type setValuesActionType = ReturnType<typeof setValuesAC>

export type InitialStateType = {
    startValue: number
    currentValue: number
    maxValue: number
}

export const resetValueAC = () => ({type: 'RESET'} as const)
export const incValueAC = () => ({type: 'INC'} as const)
export const setValuesAC = (newMaxValue: number, newStartValue: number) => ({
    type: 'SET',
    newStartValue: newStartValue,
    newMaxValue: newMaxValue,
} as const)

const initialState: InitialStateType = {
    startValue: 0,
    currentValue:0,
    maxValue: 10,
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
                currentValue: action.newStartValue,
                maxValue: action.newMaxValue,
                startValue: action.newStartValue
            }
        default:
            return {...state}
    }
}
