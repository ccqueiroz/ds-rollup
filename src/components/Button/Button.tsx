import React, { InputHTMLAttributes } from 'react'

export interface OwnProps extends InputHTMLAttributes<HTMLButtonElement> {
    text: string
}

const ButtonWrapper = (props: OwnProps) => {

    return (
        <div>
            <button>{props.text}</button>
        </div>
    )
}

export default ButtonWrapper;