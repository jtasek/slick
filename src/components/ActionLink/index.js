import React from 'react'
import styles from './styles.css'

const ActionLink = ({ title, onClickHandler }) => (
    <a
        className={styles.actionLink}
        href="#"
        onClick={e => {
            e.preventDefault()
            onClickHandler()
        }}
    >
        {title}
    </a>
)

export default ActionLink
