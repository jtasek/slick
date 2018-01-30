import React from 'react'
import { connect } from '@cerebral/react'
import { props, signal, state } from 'cerebral/tags'
import styles from './styles.css'

export default connect(
  {
    dialogs: state`forms`,
    onClick: signal`toggleDialog`
  },
  ({ dialogs, onClick }) => (
    <div className={styles.dialogs}>
      dialogs:
      {Object.keys(dialogs).map(key => (
        <a
          key={key}
          className={styles.dialog}
          href="#"
          onClick={() => onClick({ path: `forms.${key}` })}
        >
          {key}
        </a>
      ))}
    </div>
  )
)
