import { Module } from 'cerebral'
import opened from './signals/opened'
import projectBookmarked from './signals/projectBookmarked'
import projectCreated from './signals/projectCreated'
import projectDeleted from './signals/projectDeleted'
import projectNewed from './signals/newed'
import projectStarred from './signals/projectStarred'
import projectUpdated from './signals/projectUpdated'
import routed from './signals/routed'

import state from './data'

export default Module({
  state: state,
  signals: {
    routed,
    projectBookmarked: [...routed, ...projectBookmarked],
    projectCreated: [...routed, ...projectCreated],
    projectDeleted: [...routed, ...projectDeleted],
    opened: [...routed, ...opened],
    newed: [...projectNewed],
    projectStarred: [...routed, ...projectStarred],
    projectUpdated: [...routed, ...projectUpdated]
  }
})
