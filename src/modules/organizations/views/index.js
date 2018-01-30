import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import organizations from '../computed/organizations'
import View from '../../../components/View'

export default connect(
  {
    title: state`currentPage`,
    items: organizations
  },
  View
)
