import React from 'react'
import styles from './styles.css'
import { connect } from '@cerebral/react'
import { state, props } from 'cerebral/tags'

const types = {
  info: 'info',
  warn: 'warn',
  success: 'success',
  error: 'error'
}

const Notification = ({ item }) => {
  const { type, title, message } = item
  return (
    <div className={styles[type]}>
      <h3>{title}</h3>
      <div>{message}</div>
    </div>
  )
}

export default connect(
  {
    item: state`${props`path`}`
  },
  Notification
)
