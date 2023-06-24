import styles from './styles.module.scss'
import './styles.module.scss'

type Props = {
    text: string
    typeStyle: 'primary' | 'secondary' | 'secondary2' 
    disabled?: boolean
    className?: string
    type:'button' | 'submit'
    onClick?:()=>void
}

const Button = (props: Props) => {
    const buttonClass = `
        ${styles.button} 
        ${styles[`${props.typeStyle}Button`]} 
        ${props.disabled ? styles.disabled : ''}
        ${props.className}
    `

    return (
        <>
            <input
                className={buttonClass}
                type={props.type}
                value={props.text}
                onClick={props.onClick}
            />
        </>
    )
}

export default Button