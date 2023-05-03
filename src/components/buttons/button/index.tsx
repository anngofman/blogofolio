import styles from './styles.module.scss'
import './styles.module.scss'
import React from "react"

type Props = {
    text: string
    type: 'primary' | 'secondary' | 'secondary2' 
    disabled?: boolean
}

const Button = (props: Props) => {
    const buttonClass = `
        ${styles.button} 
        ${styles[`${props.type}Button`]} 
        ${props.disabled ? styles.disabled : ''}
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