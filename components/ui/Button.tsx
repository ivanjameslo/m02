"use client"

import clsx from "clsx";
import { ReactNode } from 'react';

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
      actionButton && 'hover:text-blue-700',
      'bg-blue-900',
      'text-white',
      actionButton && 'focus:font-bold',
      'hover:bg-blue-600',
      'focus:outline-none',
      'border border-transparent',
      'rounded-md',
      'px-10 py-2',
      'text-base',
      'transition-all duration-200',
      'w-full'
    )}
    >{text}</button>
    </>
  )
}

export default Button