import React, {ChangeEvent} from "react";
import {Button} from "../Button/Button";
import s from './Setter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {changeMaxValuesAC, changeStartValuesAC, InitialStateType, setValuesAC} from "../../redux/counter-reducer";

export const Setter: React.FC = () => {
    console.log("Setter")
    const dispatch = useDispatch()
    const state = useSelector<RootStateType, InitialStateType>(state => state.counter)

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValuesAC(e.currentTarget.valueAsNumber))
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValuesAC(e.currentTarget.valueAsNumber))
    }
    const onClickSet = () => dispatch(setValuesAC())

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
