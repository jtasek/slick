import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import styles from './styles.css'
import Icon from '../Icon'

const icons = {
  Organizations: {
    group: 'communication',
    name: 'business',
    color: 'rgba(255,255,255)',
    size: 24
  },
  Projects: {
    group: 'action',
    name: 'view_agenda',
    color: 'rgba(255,255,255)',
    size: 24
  },
  Users: {
    group: 'social',
    name: 'people',
    color: 'rgba(255,255,255)',
    size: 24
  },
  Teams: {
    group: 'action',
    name: 'group_work',
    color: 'rgba(255,255,255)',
    size: 24
  },
  Work: {
    group: 'action',
    name: 'work',
    color: 'rgba(255,255,255)',
    size: 24
  },
  Tasks: {
    group: 'action',
    name: 'assignment',
    color: 'rgba(255,255,255)',
    size: 24
  },
  Dashboard: {
    group: 'action',
    name: 'dashboard',
    color: 'rgba(255,255,255)',
    size: 24
  },
  Alerts: {
    group: 'social',
    name: 'notifications',
    color: 'rgba(255,255,255)',
    size: 24
  },
  Timeline: {
    group: 'action',
    name: 'timeline',
    color: 'rgba(255,255,255)',
    size: 24
  },
  Timer: {
    group: 'av',
    name: 'av_timer',
    color: 'rgba(255,255,255)',
    size: 24
  },
  Events: {
    group: 'action',
    name: 'event',
    color: 'rgba(255,255,255)',
    size: 24
  },
  Voice: { group: 'av', name: 'mic', color: 'rgba(255,255,255)', size: 24 }
}

function renderIcon(props) {
  const icon = icons[props.page]
  return <Icon {...icon} />
}

const MenubarItem = props => (
  <li className={props.isActive ? styles.active : null}>
    {/*props.signals.users.opened.getUrl()*/}
    <a href={'/#/' + props.page.toLowerCase()}>
      {renderIcon(props)}
      <span>{props.page}</span>
    </a>
  </li>
)

export default connect(
  {
    currentPage: state`currentPage`,
    pages: state`pages`
  },
  ({ currentPage, pages }) => (
    <ul className={styles.menuBar}>
      {pages.map(page => (
        <MenubarItem key={page} page={page} isActive={currentPage === page} />
      ))}
    </ul>
  )
)
