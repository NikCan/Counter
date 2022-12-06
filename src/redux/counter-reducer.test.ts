import {counterReducer, incValueAC, InitialStateType, resetValueAC} from "./counter-reducer";

test('value should be inc', () => {

    const startState: InitialStateType = {
        startValue: 0,
        currentValue: 0,
        maxValue: 5,
    }

    const endState = counterReducer(startState, incValueAC())

    expect(endState.currentValue).toBe(1)
})

test('value should be reset', () => {

    const startState: InitialStateType = {
        startValue: 0,
        currentValue: 3,
        maxValue: 5,
    }

    const endState = counterReducer(startState, resetValueAC())

    expect(endState.currentValue).toBe(0)
})