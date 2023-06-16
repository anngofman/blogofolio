import { NavLink } from 'react-router-dom'
import Tab from '../Tab'
import styles from './TabsPanel.module.scss'

import React from 'react'
import { Url } from '../../../Main'
type Props = {
  tabsList: Url[]
  name: string
}
const TabsPanel = (props: Props) => {
  if (!props.tabsList.length) return null

  return (
    <div className={styles.tabsPanel}>
      {props.tabsList.map((tab, index) => {
        return (
          <NavLink to={`/posts/${tab.url}`}>
            <Tab text={tab.title} id={String(index)} name={props.name} key={index} />
          </NavLink>
        )
      })}
    </div>
  )
}

export default TabsPanel