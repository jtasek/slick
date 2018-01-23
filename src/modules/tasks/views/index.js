import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import tasks from '../computed/tasks'
import View from '../../../components/View'

export default connect(
    {
        title: state`currentPage`,
        items: tasks
    },
    View
)
