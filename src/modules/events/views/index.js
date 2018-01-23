import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import events from '../computed/events'
import View from '../../../components/View'

export default connect(
    {
        title: state`currentPage`,
        items: events
    },
    View
)
