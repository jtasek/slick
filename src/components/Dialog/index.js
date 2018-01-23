import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import styles from './styles.css'
import Icon from '../Icon'
import Overlay from '../Overlay'
import Draggable from 'react-draggable'

const closeIcon = { group: 'content', name: 'clear', color: 'none', size: 18 }

const CloseButton = ({ onClickHandler }) => (
    <button className={styles.close} onClick={() => onClickHandler()}>
        <Icon {...closeIcon} />
    </button>
)

export default class Dialog extends Component {
    constructor(props) {
        super(props)
        this.close = this.close.bind(this)
    }
    close() {
        alert('Closing dialog')
    }
    render() {
        const { title, children, onSubmit } = this.props

        return (
            <Draggable handle={'.' + styles.header}>
                <div className={styles.dialog}>
                    {/* <Overlay> */}
                    <div className={styles.header}>
                        <h3 className={styles.title}>{title}</h3>
                        <CloseButton onClickHandler={() => this.close()} />
                    </div>
                    <div className={styles.body}>{children}</div>
                    <div className={styles.footer}>
                        <button
                            className={styles.secondary}
                            action="close"
                            onClick={() => this.close()}
                        >
                            Close
                        </button>
                        <button
                            className={styles.primary}
                            onClick={() => onSubmit()}
                        >
                            {title}
                        </button>
                    </div>
                </div>
                {/* </Overlay> */}
            </Draggable>
        )
    }
}
