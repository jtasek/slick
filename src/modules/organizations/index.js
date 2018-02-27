// @flow
import { Module } from 'cerebral'
import routed from './signals/routed'
import state from './data'
import organizationNewed from './signals/newed'

export default Module({
  state: state,
  signals: {
    routed,
    newed: [...organizationNewed]
    //  projectCreated: [...routed, ...projectCreated]
  }
})
