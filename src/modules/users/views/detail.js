import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import users from '../computed/users'
import View from '../../../components/View'

export default connect(
    {
        title: state`currentPage`,
        items: users
    },
    View
)
