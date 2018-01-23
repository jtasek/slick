import React from 'react'
import Icon from '../Icon'
import styles from './styles.css'

const icon = {group: 'toggle', name: 'star', color: 'rgba(255,255,255)', size: 32}

const Navbar = (props) => (
	<ul className={styles.navbar}>
		<li><Icon {...icon}/></li>
		<li><Icon {...icon}/></li>
		<li><Icon {...icon}/></li>
		<li><Icon {...icon}/></li>
		<li><Icon {...icon}/></li>
	</ul>
)

export default Navbar