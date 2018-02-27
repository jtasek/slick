import React from 'react'
import { connect } from '@cerebral/react'
import styles from './detail.css'
import { props, state, signal } from 'cerebral/tags'
import Card, { SimpleCard } from '../../../components/Card'
import TagFilter from '../../../components/TagFilter'
import List from '../components/List'
import Stack from '../components/Stack'
import ActionLink from '../../../components/ActionLink'
import ViewTitle from '../../../components/ViewTitle'
import currentProject from '../computed/currentProject'
import tasks from '../../tasks/computed/tasks'

function renderLists(project, tasks) {
  return project.lists.map(list => (
    <List key={list} label={list} status="0">
      <SimpleCard
        key={list + '_new'}
        item={{
          id: 0,
          title: '+ Add new task',
          description: '...'
        }}
        onClick={() => onProjectCreated()}
      />
      {tasks
        ? tasks
            .filter(task => task.list === list)
            .map(task => <Card key={task.id} path={`tasks.${task.id}`} />)
        : null}
    </List>
  ))
}

export default connect(
  {
    project: currentProject,
    tasks: tasks,
    onProjectNewed: signal`projects.newed`
  },
  ({ project, tasks, onProjectNewed }) => (
    <div className={styles.details}>
      <ViewTitle title={project.title} />
      <TagFilter />
      <Stack>{renderLists(project, tasks)}</Stack>
    </div>
  )
)
