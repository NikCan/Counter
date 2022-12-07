import React, {ChangeEvent, useState} from "react";
import {SetterPropsType} from "./SetterContainer";
import {Button} from "../Button/Button";
import s from './Setter.module.css'

export const Setter: React.FC<SetterPropsType> = ({
                                                      onClickSet,
                                                      state,
                                                      changeStartValue,
                                                      changeMaxValue,
                                                      ...props
                                                  }) => {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => changeMaxValue(e.currentTarget.valueAsNumber)
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => changeStartValue(e.currentTarget.valueAsNumber)
    const onClickSetHandler = () => onClickSet()
    const error = state.tempStartValue < 0 || state.tempStartValue >= state.tempMaxValue
    return (
        <div className={s.container}>
            <div className={s.inputsBlock}>
                <div className={s.inputValue}>max value:<input
                    className={error ? s.errorInput : ""}
                    type={"number"}
                    value={state.tempMaxValue}
                    onChange={onChangeMaxValueHandler}
                /></div>
                <div className={s.inputValue}>start value:<input
                    className={error ? s.errorInput : ""}
                    type={"number"}
                    value={state.tempStartValue}
                    onChange={onChangeStartValueHandler}
                /></div>
            </div>
            <div className={s.buttonsBlock}>
                <Button
                    className={s.button}
                    callBack={onClickSetHandler}
                    name={"set"}
                    disabled={error}
                />
            </div>
        </div>
    );
}
