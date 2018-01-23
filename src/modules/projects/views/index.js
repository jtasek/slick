import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import projects from '../computed/projects'
import View from '../../../components/View'

export default connect(
    {
        title: state`currentPage`,
        items: projects
    },
    View
)
