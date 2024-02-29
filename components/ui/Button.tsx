"use client"

import {ReactNode} from 'react'
import clsx from "clsx"

interface buttonProps{
    type?: "button" | "submit" | "reset";
    text: string | ReactNode;
    onclick?: () => void;
    actionButton?:  boolean;
}

const Button = ({type, text, onclick, actionButton}: buttonProps) => {
  return (
    <>
    <button
    onClick={onclick}
    type={type}
    className={clsx(
        actionButton && 'bg-orange-700 rounded-full p-2 text-white',
        'bg-orange-700 px-2 text-white'
    )}
    >{text}</button>
    </>
  )
}

export default Button