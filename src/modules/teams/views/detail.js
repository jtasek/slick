import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import teams from '../computed/teams'
import View from '../../../components/View'

export default connect(
    {
        title: state`currentPage`,
        items: teams
    },
    View
)
