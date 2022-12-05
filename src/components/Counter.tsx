import React from "react";
import {Button} from "./Button";
import s from "./Counter.module.css"

type CounterPropsType = {
    onClickReset: () => void
    onClickInc: () => void
}
export const Counter: React.FC<CounterPropsType> = ({
                                                        onClickReset,
                                                        onClickInc,
                                                        ...props
                                                    }) => {
    return <>
        <div>NUMBER</div>
        <div className={s.counter}>
            <Button
                className={s.button}
                callBack={onClickInc}
                name={"inc"}
                disabled={false}/>
            <Button
                className={s.button}
                callBack={onClickReset}
                name={"reset"}
                disabled={false}/>
        </div>
    </>
}