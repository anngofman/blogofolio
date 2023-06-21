import styles from './styles.module.scss'
import './styles.module.scss'

type Props = {
    text: string
    type: 'primary' | 'secondary' | 'secondary2' 
    disabled?: boolean
    className?: string
    onClick?:()=>void
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
                onClick={props.onClick}
            />
        </>
    )
}

export default Button