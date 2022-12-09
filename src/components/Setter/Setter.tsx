import React, {ChangeEvent} from "react";
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
    const error = state.tempStartValue < 0 || state.tempStartValue >= state.tempMaxValue
    return (
        <div className={s.container}>
            <div className={s.inputsFrame}>
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
            <div className={s.buttonsFrame}>
                <Button
                    className={s.button}
                    callBack={onClickSet}
                    name={"set"}
                    disabled={error}
                />
            </div>
        </div>
    );
}
