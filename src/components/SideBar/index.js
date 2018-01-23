import React from 'react'
import styles from './styles.css'

const SideBar = (props) => (
	<div className={styles.sideBar + ' ' + styles[props.dock]}>
		{props.children}
	</div>
)

export default SideBar