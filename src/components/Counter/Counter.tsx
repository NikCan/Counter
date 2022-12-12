import React from "react";
import {Button} from "../Button/Button";
import s from "./Counter.module.css"
import {CounterPropsType} from "./CounterContainer";
import classNames from "classnames";


export const Counter: React.FC<CounterPropsType> = ({
                                                        onClickReset,
                                                        onClickInc,
                                                        state,
                                                        ...props
                                                    }) => {
    const stopInc = state.currentValue === state.maxValue
    const error = state.tempStartValue < 0 || state.tempStartValue >= state.tempMaxValue
    const scoreboardClassName = classNames(s.scoreboard, {
        [s.warning]: error,
        [s.message]: !!state.message,
        [s.maxValue]: stopInc
    })
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