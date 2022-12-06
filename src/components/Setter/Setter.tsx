import React, {ChangeEvent, useState} from "react";
import {SetterPropsType} from "./SetterContainer";
import {Button} from "../Button/Button";
import s from './Setter.module.css'

export const Setter: React.FC<SetterPropsType> = ({
                                                      onClickSet,
                                                      state,
                                                      ...props
                                                  }) => {
    const error = false
    const [maxValue, setMaxValue] = useState<number>(state.maxValue)
    const [startValue, setStartValue] = useState<number>(state.startValue)
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(e.currentTarget.valueAsNumber)
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => setStartValue(e.currentTarget.valueAsNumber)
    const onClickSetHandler = () => onClickSet(maxValue, startValue)
    return (
        <div className={s.container}>
            <div className={s.inputsBlock}>
                <div className={s.inputValue}>max value:<input
                    className={error ? "errorInput" : ""}
                    type={"number"}
                    value={maxValue}
                    onChange={onChangeMaxValueHandler}
                /></div>
                <div className={s.inputValue}>start value:<input
                    className={error ? "errorInput" : ""}
                    type={"number"}
                    value={startValue}
                    onChange={onChangeStartValueHandler}
                /></div>
            </div>
            <div className={s.buttonsBlock}>
                <Button
                    className={s.button}
                    callBack={onClickSetHandler}
                    name={"set"}
                    disabled={false}
                />
            </div>
        </div>
    );
}
