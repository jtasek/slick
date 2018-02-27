// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from '@cerebral/react'
import { props, signal, state } from 'cerebral/tags'
import styles from './styles.css'
import Icon from '../Icon'
import ActionList from '../ActionList'

const favoriteIcon = {
  group: 'toggle',
  name: 'star',
  color: 'rgba(0,0,0,.5)',
  size: 12
}
const dateIcon = {
  group: 'action',
  name: 'schedule',
  color: 'rgba(0,0,0,.5)',
  size: 12
}
const bookmarkIcon = {
  group: 'action',
  name: 'bookmark',
  color: '#f06',
  size: 12
}

const currentDate = new Date().toLocaleDateString()

const Title = ({ text }) => <h3 className={styles.title}>{text}</h3>

const Image = ({ image }) => <div className={styles.image}>{image}</div>

const Content = ({ text }) => <p className={styles.content}>{text}</p>

const Status = props => <div className={styles.status}>{props.children}</div>

const Tag = ({ value }) => (
  <li className={[styles.tag, styles[value]].join(' ')} title={value} />
)

const Tags = ({ children }) => <ul className={styles.tags}>{children}</ul>

const FavoriteButton = () => (
  <li className={styles.favorite}>
    <Icon {...favoriteIcon} />
  </li>
)

/*const BookmarkButton = () => (
    <div className={styles.bookmark}>
        <Icon {...bookmarkIcon} />
    </div>
)*/

const BookmarkButton = () => <div className={styles.bookmark} />

const DateInfo = props => (
  <div className={styles.dateInfo}>
    <Icon {...dateIcon} />
    <span className={styles.date}>{props.date} • jakub</span>
  </div>
)

export const SimpleCard = ({ item, onClick }) => (
  <li className={styles.card} onClick={() => onClick({ id: item.id })}>
    <Title text={item.title} />
    <input className={styles.text} type="text" value="Task title..." />
  </li>
)

export const Card = ({ item, onClick, onBookmark, onStar }) => (
  <li
    className={styles.card}
    // style={opacity}
    onClick={() => onClick({ id: item.id })}
  >
    {/* <BookmarkButton onClick={() => onBookmark({ id: item.id })} /> */}
    {item.tags ? (
      <Tags>{item.tags.map(tag => <Tag key={tag} value={tag} />)}</Tags>
    ) : null}
    <ActionList>
      <FavoriteButton onClick={() => onStar({ id: item.id })} />
    </ActionList>
    <Title text={item.title} />
    {/* <Image image={item.title} /> */}
    <Content text={item.description} />
    <Status>
      <DateInfo date={currentDate} />
    </Status>
  </li>
)

export default connect(
  {
    item: state`${props`path`}`,
    onClick: signal`projects.opened`,
    onBookmark: signal`projects.projectBookmarked`,
    onStar: signal`projects.projectStarred`
  },
  Card
)
