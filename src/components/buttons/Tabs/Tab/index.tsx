import styles from './Tab.module.scss'

type Props = {
	text: string
	id:string
	name:string
	isChecked?:boolean
}
const Tab = (props: Props) => {
	
	return (
		<label className={styles.tab}>
				{props.text}
				<input type="radio" checked={props.isChecked} name="props.name" id="props.id" hidden={false} />
		</label>
	)
}

export default Tab