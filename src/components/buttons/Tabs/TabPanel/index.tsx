import Tab from '../Tab'
import styles from './TabsPanel.module.scss'

import React from 'react'
type Props = {
	tabsList: string[]
	name: string
	
}
const TabsPanel = (props: Props) => {
  if (!props.tabsList.length) return null

  return (
    <div className={styles.tabsPanel}>
      {props.tabsList.map((tab, index) => {
        return (
					<Tab text={tab} id={String(index)} name={props.name} key={index} />
        )
      })}
    </div>
  )
}

export default TabsPanel