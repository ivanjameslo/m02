import React from 'react'
import { Modal } from 'antd';
import type { ButtonProps, LegacyButtonType } from 'antd/es/button/button';


interface ICustomModalProps {
    title: string;
    children: React.ReactNode;
    closable?: boolean;
    footer?: React.ReactNode;
    isOpen: boolean;
    onOk?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    okText?: string;
    onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    okType?: LegacyButtonType;
    okButtonProps?: ButtonProps;
    classes?:string;
    width?:number;
}

export const CustomModal = (props: ICustomModalProps) => {
    return (
        <Modal
            title={props.title}
            centered
            closable={props.closable}
            footer={props.footer}
            open={props.isOpen}
            onOk={props.onOk}
            okText={props.okText}
            onCancel={props.onCancel}
            okType={props.okType}
            okButtonProps={props.okButtonProps}
            className={props.classes}
            style={{width:'max-content'}}
            width={props.width}
        >
            {props.children}
        </Modal>    
    );
}