import { Module } from 'cerebral'
import { set, debounce, when } from 'cerebral/operators'
import { state } from 'cerebral/tags'
// system modules
import FormsProvider from '@cerebral/forms'
import Router from '@cerebral/router'
import Shortcuts from '@cerebral/shortcuts'
// application modules
import alerts from '../alerts'
import dashboard from '../dashboard'
import events from '../events'
import organizations from '../organizations'
import projects from '../projects'
import tasks from '../tasks'
import teams from '../teams'
import users from '../users'
// actions
import deleteNotification from './actions/deleteNotification'
import filter from './actions/filter'
import invalidRoute from './actions/invalidRoute'
import resetFilter from './actions/resetFilter'
import saveSearch from './actions/saveSearch'
import search from './actions/search'
import toggleDialog from './actions/toggleDialog'
// configuration
import config from './config'
import routes from './routes'
import shortcuts from './shortcuts'

export default Module({
  state: config,
  modules: {
    alerts,
    dashboard,
    events,
    organizations,
    projects,
    tasks,
    teams,
    users,
    router: Router({
      onlyHash: true, // Use hash urls
      routes
    }),
    shortcuts: Shortcuts(shortcuts)
  },
  providers: {
    forms: FormsProvider()
  },
  signals: {
    home: [set(state`currentPage`, 'Dashboard')],
    filter: [filter],
    invalidRouted: [invalidRoute],
    notificationClosed: [deleteNotification],
    resetFilter: [resetFilter],
    searchReset: [set(state`search`, ''), set(state`searches`, [])],
    saveSearch: [saveSearch],
    tagClicked: [
      set(state`searching`, true),
      search,
      set(state`searching`, false)
    ],
    searched: [
      when(state`searching`),
      {
        false: [
          debounce(200),
          {
            continue: [search],
            discard: []
          }
        ],
        true: []
      }
    ],
    toggleDialog: [toggleDialog]
  }
})
