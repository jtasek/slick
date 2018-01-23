// @flow
import React from 'react'
// import Card from '../Card'
import { Card, SimpleCard } from '../../../../components/Card'
import projects from '../../computed/projects'
import styles from './styles.css'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import { findDOMNode } from 'react-dom'
import { DropTarget } from 'react-dnd'
import ReactMotionFlip from 'react-motion-flip'

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.
const types = {
    CARD: 'card'
}

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
const listTarget = {
    canDrop(props, monitor) {
        console.log('canDrop called')
        // You can disallow drop based on props or item
        const item = monitor.getItem()
        return true
    },

    hover(props, monitor, component) {
        // This is fired very often and lets you perform side effects
        // in response to the hover. You can't handle enter and leave
        // here—if you need them, put monitor.isOver() into collect() so you
        // can just use componentWillReceiveProps() to handle enter/leave.

        // You can access the coordinates if you need them
        console.log('hover called')
        const clientOffset = monitor.getClientOffset()
        const componentRect = findDOMNode(component).getBoundingClientRect()

        // You can check whether we're over a nested drop target
        const isJustOverThisOne = monitor.isOver({ shallow: true })

        // You will receive hover() even for items for which canDrop() is false
        const canDrop = monitor.canDrop()
    },

    drop(props, monitor, component) {
        console.log('drop called')
        if (monitor.didDrop()) {
            // If you want, you can check whether some nested
            // target already handled drop
            return
        }

        // Obtain the dragged item
        const item = monitor.getItem()

        // You can do something with it
        ChessActions.movePiece(item.fromPosition, props.position)

        // You can also do nothing and return a drop result,
        // which will be available as monitor.getDropResult()
        // in the drag source's endDrag() method
        return { moved: true }
    }
}
/*
@DropTarget(types.CARD, listTarget, (connect, monitor) => ({
	// Call this function inside render()
	// to let React DnD handle the drag events:
	connectDropTarget: connect.dropTarget(),
	// You can ask the monitor about the current drag state:
	isOver: monitor.isOver(),
	isOverCurrent: monitor.isOver({ shallow: true }),
	canDrop: monitor.canDrop(),
	itemType: monitor.getItemType()
}))

*/

export default class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { isOver, canDrop, connectDropTarget } = this.props
        const { label, children, status } = this.props

        //	return connectDropTarget(
        return (
            <li className={styles.lane}>
                <h2>{label}</h2>
                <div>
                    <ul className={styles.list}>
                        <ReactMotionFlip
                            style={{ display: 'flex', flexFlow: 'column wrap' }}
                        >
                            {children}
                        </ReactMotionFlip>
                    </ul>
                </div>
                <div className={styles.footer}>
                    <span>{status}</span>
                </div>
            </li>
        )
        //	)
    }
}
