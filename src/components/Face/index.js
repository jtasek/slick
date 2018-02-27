import React from 'react'
import styles from './styles.css'

export default ({ title, imageUrl }) => (
  <img className={styles.face} src={imageUrl} title={title} />
)
