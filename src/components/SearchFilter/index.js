import React from 'react'
import styles from './styles.css'
import { connect } from '@cerebral/react'
import { props, signal, state } from 'cerebral/tags'

const Item = ({ onClickHandler, value }) => (
    <li>
        <a
            href="#"
            className={styles.search}
            onClick={e => {
                e.preventDefault()
                onClickHandler({
                    value
                })
            }}
        >
            {value}
        </a>
    </li>
)

const SearchFilter = ({ searches, onClickHandler, onResetHandler }) => (
    <ul className={styles.colorFilter}>
        {searches.map(value => (
            <Item key={value} value={value} onClickHandler={onClickHandler} />
        ))}
        <Item key="reset" value="reset" onClickHandler={onResetHandler} />
    </ul>
)

export default connect(
    {
        searches: state`searches`,
        onClickHandler: signal`search`,
        onResetHandler: signal`resetSearch`
    },
    SearchFilter
)
