import { Module } from 'cerebral'
import fieldChanged from './signals/fieldChanged'
import routed from './signals/routed'
import projectBookmarked from './signals/projectBookmarked'
import projectCreated from './signals/projectCreated'
import projectDeleted from './signals/projectDeleted'
import opened from './signals/opened'
import projectNewed from './signals/newed'
import projectStarred from './signals/projectStarred'
import projectUpdated from './signals/projectUpdated'

import state from './data'

export default Module({
    state: state,
    signals: {
        fieldChanged,
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
