import React from 'react'
import styles from './styles.css'
import Icon from '../Icon'

const closeIcon = { group: 'content', name: 'clear', color: 'none', size: 18 }

export default ({ path, onClick }) => (
  <button className={styles.close} onClick={e => onClick({ path })}>
    <Icon {...closeIcon} />
  </button>
)
