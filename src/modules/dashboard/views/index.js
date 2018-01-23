import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import styles from './styles.css'
import projectCount from '../computed/projectCount'
import teamCount from '../computed/teamCount'
import taskCount from '../computed/taskCount'
import userCount from '../computed/userCount'
import ViewTitle from '../../../components/ViewTitle'

const Tile = ({ title, count }) => (
    <div className={styles.tile}>
        <a href={'#/' + title}>
            <div className={styles.title}>{title}</div>
            <div className={styles.count}>{count}</div>
        </a>
    </div>
)

const Tasks = connect(
    {
        count: taskCount
    },
    ({ count }) => <Tile title="Tasks" count={count} />
)

const Teams = connect(
    {
        count: teamCount
    },
    ({ count }) => <Tile title="Teams" count={count} />
)

const Users = connect(
    {
        count: userCount
    },
    ({ count }) => <Tile title="Users" count={count} />
)

const Projects = connect(
    {
        count: projectCount
    },
    ({ count }) => <Tile title="Projects" count={count} />
)

const Stats = props => <div className={styles.stats}>{props.children}</div>

const View = ({ title, items }) => (
    <div className={styles.view}>
        <ViewTitle title={title} />
        <Stats>
            <Projects key="projects" />
            <Tasks key="tasks" />
            <Teams key="teams" />
            <Users key="users" />
        </Stats>
    </div>
)

export default connect(
    {
        title: state`currentPage`,
        projectCount: projectCount
    },
    View
)
