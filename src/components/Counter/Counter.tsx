import React from "react";
import {Button} from "../Button/Button";
import s from "./Counter.module.css"
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {incValueAC, InitialStateType, resetValueAC} from "../../redux/counter-reducer";

export const Counter:React.FC = () => {
    console.log("Counter")
    const dispatch = useDispatch()
    const state = useSelector<RootStateType, InitialStateType>(state => state.counter)

    const stopInc = state.currentValue === state.maxValue
    const error = state.tempStartValue < 0 || state.tempStartValue >= state.tempMaxValue
    const scoreboardClassName = classNames(s.scoreboard, {
        [s.warning]: error,
        [s.message]: !!state.message,
        [s.maxValue]: stopInc
    })

    const onClickReset = () => dispatch(resetValueAC())
    const onClickInc = () => dispatch(incValueAC())

    return (
        <div className={s.container}>
            <div className={scoreboardClassName}>
                {state.message ? state.message : state.currentValue}
            </div>
            <div className={s.buttonsFrame}>
                <Button
                    className={s.button}
                    callBack={onClickInc}
                    name={"inc"}
                    disabled={stopInc || !!state.message}/>
                <Button
                    className={s.button}
                    callBack={onClickReset}
                    name={"reset"}
                    disabled={!!state.message}
                />
            </div>
        </div>
    )
}