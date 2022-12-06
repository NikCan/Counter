import React from "react";
import {Button} from "../Button/Button";
import s from "./Counter.module.css"
import {CounterPropsType} from "./CounterContainer";

export const Counter: React.FC<CounterPropsType> = ({
                                                        onClickReset,
                                                        onClickInc,
                                                        state,
                                                        ...props
                                                    }) => {
    const error = state.currentValue === state.maxValue
    return (
        <div className={s.container}>
            <div className={s.scoreboard}>{state.currentValue}</div>
            <div className={s.buttonsBlock}>
                <Button
                    className={s.button}
                    callBack={onClickInc}
                    name={"inc"}
                    disabled={error}/>
                <Button
                    className={s.button}
                    callBack={onClickReset}
                    name={"reset"}
                    disabled={false}/>
            </div>
        </div>
    )
}