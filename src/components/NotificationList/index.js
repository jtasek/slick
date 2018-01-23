import React from 'react'
import { Component } from '@cerebral/react'
import styles from './styles.css'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import notifications from '../../modules/app/computed/notifications'
import Notification from '../Notification'

export default connect(
    {
        notifications
    },
    ({ notifications }) => (
        <div className={styles.NotificationList}>
            {notifications.map(item => (
                <Notification key={item.id} path={item.path} />
            ))}
        </div>
    )
)
