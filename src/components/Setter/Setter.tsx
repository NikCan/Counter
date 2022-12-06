import React from "react";
import {SetterPropsType} from "./SetterContainer";
import {Button} from "../Button/Button";
import s from './Setter.module.css'

export const Setter: React.FC<SetterPropsType> = ({
                                                      onClickSet,
                                                      state,
                                                      ...props
                                                  }) => {
    const error = false
    return (
        <div className={s.container}>
            <div className={s.inputsBlock}>
                <div className={s.inputValue}>max value:<input
                    className={error ? "errorInput" : ""}
                    type={"number"}
                    value={1}
                    onChange={() => {
                    }}
                /></div>
                <div className={s.inputValue}>start value:<input
                    className={error ? "errorInput" : ""}
                    type={"number"}
                    value={2}
                    onChange={() => {
                    }}
                /></div>
            </div>
            <div className={s.buttonsBlock}>
                <Button
                    className={s.button}
                    callBack={onClickSet}
                    name={"set"}
                    disabled={false}
                />
            </div>
        </div>
    );
}
