import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
    className: string
}
export const Button: React.FC<ButtonPropsType> = ({
                                                      className,
                                                      name,
                                                      callBack,
                                                      disabled,
                                                      ...props
                                                  }) => {
    return (
        <>
            <button className={s.button + ' ' + className}
                    disabled={disabled}
                    onClick={callBack}
            >{name}</button>
        </>
    )
}