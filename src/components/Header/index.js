import React from 'react'
import MenuBar from '../MenuBar'
import SearchBar from '../SearchBar'
import Icon from '../Icon'
import styles from './styles.css'
import { connect } from '@cerebral/react'
import { props, signal, state } from 'cerebral/tags'

const LogoButton = props => (
    <a className={styles.logo} href="#">
        {props.applicationName}
    </a>
)

const logoutIcon = {
    group: 'action',
    name: 'power_settings_new',
    color: 'rgba(0,0,0,.3)',
    size: 24
}

const saveIcon = {
    group: 'action',
    name: 'done',
    color: 'rgba(0,0,0,.3)',
    size: 24
}

const LoggoutButton = props => (
    <a href="/logout" className={styles.logout}>
        <Icon {...logoutIcon} />
    </a>
)

const ProfileButton = ({ name, imageUrl }) => (
    <a href="/profile" className={styles.profile}>
        <label>{name}</label>
        <img className={styles.avatar} src={imageUrl} />
    </a>
)

const SaveSearchButton = connect(
    {
        onSaveSearchHandler: signal`saveSearch`
    },
    ({ onSaveSearchHandler }) => (
        <a
            href="#"
            className={styles.save}
            onClick={e => {
                e.preventDefault()
                onSaveSearchHandler()
            }}
        >
            <Icon {...saveIcon} />
        </a>
    )
)

const Header = props => (
    <header>
        <LogoButton applicationName={props.applicationName} />
        <MenuBar />
        <div className={styles.right}>
            <SearchBar />
            <SaveSearchButton />
            <ProfileButton name="Jakub Tasek" imageUrl="/images/avatar.jpg" />
            <LoggoutButton />
        </div>
    </header>
)

export default Header
