import React, { Component } from 'react'
import styles from './styles.css'
import Icon from '../Icon'
import Overlay from '../Overlay'

const closeIcon = { group: 'content', name: 'clear', color: 'none', size: 18 }

const CloseButton = ({ onClickHandler }) => (
  <button className={styles.close} onClick={() => onClickHandler()}>
    <Icon {...closeIcon} />
  </button>
)

export default class Confirmation extends Component {
  constructor(props) {
    super(props)
    this.close = this.close.bind(this)
  }
  close() {
    console.log('Closing dialog')
  }
  render() {
    const {title, description, children } =  this.props
    return this.props.isOpen ? (
      <Overlay>
        <div className={styles.dialog}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <CloseButton onClickHandler={() => this.close()} />
          </div>
          <div className={styles.body}>
            <p>{description}</p>
            <form>
              <fieldset>{children}</fieldset>
            </form>
          </div>
          <div className={styles.footer}>
            {/*  props.actions.map(action => <button href={action} />)*/}
            <button className={styles.secondary} action="close">
              Close
            </button>
            <button className={styles.primary} action="create">
              Create Project
            </button>
          </div>
        </div>
      </Overlay>
    ) : null
  }
}
