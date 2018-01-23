import React from 'react'
import styles from './styles.css'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import List from '../List'

const Stack = props => <ul className={styles.stack}>{props.children}</ul>

export default Stack
