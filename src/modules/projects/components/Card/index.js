// @flow
import React from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import { connect } from '@cerebral/react'
import { props, state, signal } from 'cerebral/tags'
import styles from './styles.css'
import Card from '../../../../components/Card'

const types = {
  CARD: 'card'
}

const cardSource = {
  canDrag(props, monitor) {
    // You can disallow drag based on props
    console.log('canDrag called')
    return true
  },

  isDragging(props, monitor) {
    // If your component gets unmounted while dragged
    // (like a card in Kanban board dragged between lists)
    // you can implement something like this to keep its
    // appearance dragged:
    console.log('isDraggin called')
    return monitor.getItem().id === props.id
  },

  beginDrag(props, monitor, component) {
    // Return the data describing the dragged item
    console.log('beginDrag called')
    return {
      id: props.id,
      index: props.index
    }
  },

  endDrag(props, monitor, component) {
    console.log('endDrag called')
    if (!monitor.didDrop()) {
      // You can check whether the drop was successful
      // or if the drag ended but nobody handled the drop
      return
    }

    // When dropped on a compatible target, do something.
    // Read the original dragged item from getItem():
    const item = monitor.getItem()

    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    const dropResult = monitor.getDropResult()

    // This is a good place to call some Flux action
    CardActions.moveCardToList(item.id, dropResult.listId)
  }
}

@DragSource(types.CARD, cardSource, (connect, monitor) => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDragSource: connect.dragSource(),
  // You can ask the monitor about the current drag state:
  isDragging: monitor.isDragging()
}))
class ProjectCard extends React.Component {
  constructor(props) {
    console.dir(props)
    super(props)
  }

  render() {
    // These props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isDragging, connectDragSource } = this.props
    const { item, onClick, onBookmark, onStar } = this.props
    const opacity = { opacity: isDragging ? 0.7 : 1 }

   // return connectDragSource(
     return <Card key={item.id} item={item} onClick={onClick} onBookmark={onBookmark} onStar={onStar} />
    //)
  }
}

export default connect(
  {
    item: state`${props`path`}`,
    onClick: signal`projects.opened`,
    onBookmark: signal`projects.projectBookmarked`,
    onStar: signal`projects.projectStarred`
  }, ProjectCard)