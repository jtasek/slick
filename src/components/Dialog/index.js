import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import styles from './styles.css'
import Icon from '../Icon'
import Overlay from '../Overlay'
import Draggable from 'react-draggable'
import CloseButton from '../CloseButton'

export default class Dialog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, path, children, onClose, onSubmit } = this.props

    // <Draggable handle={'.' + styles.header}>
    // </Draggable>

    return (
      <div className={styles.backdrop}>
        <div className={styles.dialog}>
          {/* <Overlay> */}
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <CloseButton onClickHandler={() => onClose({ path: path })} />
          </div>
          <div className={styles.body}>{children}</div>
          <div className={styles.footer}>
            <button
              className={styles.secondary}
              action="close"
              onClick={() => onClose({ path: path })}
            >
              Close
            </button>
            <button className={styles.primary} onClick={() => onSubmit()}>
              {title}
            </button>
          </div>
          {/* </Overlay> */}
        </div>
      </div>
    )
  }
}
