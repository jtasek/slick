import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dialog from '../../components/Dialog'
import Layout from '../../components/Layout'

import visibleDialog from '../../modules/app/computed/visibleDialog'

// todo register dynamically
const views = {
  Alert: require('../../modules/alerts/views/detail').default,
  Alerts: require('../../modules/alerts/views/index').default,
  Dashboard: require('../../modules/dashboard/views/index').default,
  Event: require('../../modules/events/views/detail').default,
  Events: require('../../modules/events/views/index').default,
  Organizations: require('../../modules/organizations/views/detail').default,
  Organizations: require('../../modules/organizations/views/index').default,
  Project: require('../../modules/projects/views/detail').default,
  Projects: require('../../modules/projects/views/index').default,
  Task: require('../../modules/tasks/views/detail').default,
  Tasks: require('../../modules/tasks/views/index').default,
  Team: require('../../modules/teams/views/detail').default,
  Teams: require('../../modules/teams/views/index').default,
  User: require('../../modules/users/views/detail').default,
  Users: require('../../modules/users/views/index').default
}

// Memoize view loading
const dialogs = {
  EventCreate: require('../../modules/events/dialogs/create').default,
  EventDelete: require('../../modules/events/dialogs/delete').default,
  EventEdit: require('../../modules/events/dialogs/edit').default,
  OrganizationCreate: require('../../modules/organizations/dialogs/create')
    .default,
  OrganizationDelete: require('../../modules/organizations/dialogs/delete')
    .default,
  OrganizationEdit: require('../../modules/organizations/dialogs/edit').default,
  ProjectCreate: require('../../modules/projects/dialogs/create').default,
  ProjectDelete: require('../../modules/projects/dialogs/delete').default,
  ProjectEdit: require('../../modules/projects/dialogs/edit').default,
  TaskCreate: require('../../modules/tasks/dialogs/create').default,
  TaskDelete: require('../../modules/tasks/dialogs/delete').default,
  TaskEdit: require('../../modules/tasks/dialogs/edit').default,
  TeamCreate: require('../../modules/teams/dialogs/create').default,
  TeamDelete: require('../../modules/teams/dialogs/delete').default,
  TeamEdit: require('../../modules/teams/dialogs/edit').default,
  UserCreate: require('../../modules/users/dialogs/create').default,
  UserDelete: require('../../modules/users/dialogs/delete').default,
  UserEdit: require('../../modules/users/dialogs/edit').default
}

const MissingPage = page => <h1>Page was not found</h1>

function renderView(views, page) {
  const Page = views[page]

  console.log(`Rendering ${page}`)

  return Page ? <Page key={page} /> : <MissingPage page={page} />
}

function renderDialog(dialogs, forms) {
  const Dialog = forms.length > 0 ? dialogs[forms[0].name] : null
  if (Dialog) {
    console.log(`Rendering ${Dialog.name}`)
  }
  return Dialog ? (
    <Dialog key={Dialog.name} id={Dialog.name} title="Create Project" />
  ) : null
}

@DragDropContext(HTML5Backend)
class App extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        {renderView(views, this.props.page)}
        {renderDialog(dialogs, this.props.dialogs)}
      </Layout>
    )
  }
}

export default connect(
  {
    page: state`currentPage`,
    dialogs: visibleDialog
  },
  App
)
