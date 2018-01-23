import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import styles from './styles.css'

const StatusBar = () => (
	<div className={styles.statusBar}>
		<div>slot 1</div>
		<div>slot 2</div>
		<div>slot 3</div>
		<div>slot 4</div>
		<div>slot 5</div>
	</div>
)

export default StatusBar