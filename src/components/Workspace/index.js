import React from 'react'
import styles from './styles.css'
import ViewTitle from '../ViewTitle'

const Workspace = (props) => (
    <div className={styles.workspace}>
        <ViewTitle title={props.currentPage} />
        {props.children}
    </div>
)

export default Workspace