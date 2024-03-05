"use client"

import clsx from "clsx";
import { ReactNode } from 'react';

interface buttonProps{
    type?: "button" | "submit" | "reset";
    text: string | ReactNode;
    onClick?: (arg?: number) => void | undefined;
    actionButton?:  boolean;
}

const Button = ({type, text, onClick, actionButton}: buttonProps) => {
  return (
    <>
    <button
    onClick={onClick}
    type={type}
    className={clsx(
      actionButton && 'hover:text-white',
      'bg-blue-900',
      'text-white',
      actionButton && 'focus:font-bold',
      'hover:bg-blue-600',
      'text-white',
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