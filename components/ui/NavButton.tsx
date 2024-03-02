"use client"

import clsx from 'clsx';
import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  className?: string,
  text: string;
  onClick?: () => void;
  actionButton?: boolean;
}

const NavButton: React.FC<ButtonProps> = ({ type, text, onClick, actionButton }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton && 'hover:text-blue-700',
          actionButton && 'focus:font-bold',
          'hover:text-blue-300',
          'px-4 py-2'
        )}
      >
        {text}
      </button>
    </>
  );
};

export default NavButton;
