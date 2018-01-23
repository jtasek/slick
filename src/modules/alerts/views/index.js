import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import alerts from '../computed/alerts'
import View from '../../../components/View'

export default connect(
    {
        title: state`currentPage`,
        items: alerts
    },
    View
)
