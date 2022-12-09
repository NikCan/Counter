import {
    changeMaxValuesAC,
    changeStartValuesAC,
    counterReducer,
    incValueAC,
    InitialStateType,
    resetValueAC,
    setValuesAC
} from "./counter-reducer";

test('current value should be inc', () => {

    const startState: InitialStateType = {
        startValue: 0,
        currentValue: 0,
        maxValue: 5,
        tempMaxValue: 5,
        tempStartValue: 0,
        message:""
    }

    const endState = counterReducer(startState, incValueAC())

    expect(endState.currentValue).toBe(1)
})

test('current value should be reset', () => {

    const startState: InitialStateType = {
        startValue: 0,
        currentValue: 3,
        maxValue: 5,
        tempStartValue: 0,
        tempMaxValue: 5,
        message:""
    }

    const endState = counterReducer(startState, resetValueAC())

    expect(endState.currentValue).toBe(0)
})

test('new start and max values should be set', () => {

    const startState: InitialStateType = {
        startValue: 0,
        currentValue: 3,
        maxValue: 5,
        tempStartValue: 1,
        tempMaxValue: 10,
        message:""
    }

    const endState = counterReducer(startState, setValuesAC())

    expect(endState.currentValue).toBe(1)
    expect(endState.startValue).toBe(1)
    expect(endState.maxValue).toBe(10)
})

test('temp start value should be change', () => {

    const startState: InitialStateType = {
        startValue: 0,
        currentValue: 3,
        maxValue: 5,
        tempStartValue: 1,
        tempMaxValue: 10,
        message:""
    }

    const endState = counterReducer(startState, changeStartValuesAC(5))
    const endState2 = counterReducer(startState, changeStartValuesAC(15))
    const endState3 = counterReducer(startState, changeStartValuesAC(-1))

    expect(endState.tempStartValue).toBe(5)
    expect(endState.startValue).toBe(0)
    expect(endState.currentValue).toBe(3)
    expect(endState.message).toBe("enter values and press 'set'")
    expect(endState2.message).toBe("Incorrect value!")
    expect(endState3.message).toBe("Incorrect value!")
})

test('temp max value should be change', () => {

    const startState: InitialStateType = {
        startValue: 0,
        currentValue: 3,
        maxValue: 5,
        tempStartValue: 1,
        tempMaxValue: 10,
        message:""
    }

    const endState = counterReducer(startState, changeMaxValuesAC(15))
    const endState2 = counterReducer(startState, changeMaxValuesAC(1))

    expect(endState.tempMaxValue).toBe(15)
    expect(endState.maxValue).toBe(5)
    expect(endState.currentValue).toBe(3)
    expect(endState.message).toBe("enter values and press 'set'")
    expect(endState2.message).toBe("Incorrect value!")
})