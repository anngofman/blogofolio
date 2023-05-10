import styles from './styles.module.scss'
import './styles.module.scss'
import React from "react"

type Props = {
    text: string
    type: 'primary' | 'secondary' | 'secondary2' 
    disabled?: boolean
    className?: string
}

const Button = (props: Props) => {
    const buttonClass = `
        ${styles.button} 
        ${styles[`${props.type}Button`]} 
        ${props.disabled ? styles.disabled : ''}
        ${props.className}
    `

    return (
        <>
            <input
                className={buttonClass}
                type="button"
                value={props.text}
            />
        </>
    )
}

export default Button