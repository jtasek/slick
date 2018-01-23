// @flow
import { Module } from 'cerebral'
import routed from './signals/routed'
import state from './data'

export default Module({
    state: state,
    signals: {
        routed
    }
})
