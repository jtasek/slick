import React from 'react'
import { connect } from '@cerebral/react'
import { props, signal, state } from 'cerebral/tags'
import styles from './styles.css'

export default connect(
    {
        dialogs: state`forms`,
        onClickHandler: signal`toggleDialog`
    },
    ({ dialogs, onClickHandler }) => (
        <div className={styles.dialogs}>
            {Object.keys(dialogs).map(key => (
                <a
                    key={key}
                    className={styles.dialog}
                    href="#"
                    onClick={() => onClickHandler({ key: key })}
                >
                    {key}
                </a>
            ))}
        </div>
    )
)
