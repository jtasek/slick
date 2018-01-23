import React from 'react'
import styles from './styles.css'
import { connect } from '@cerebral/react'
import { props, signal, state } from 'cerebral/tags'

const Item = ({ onClickHandler, color }) => (
    <li>
        <a
            href="#"
            className={styles[color]}
            onClick={e => {
                e.preventDefault()
                onClickHandler({
                    value: color
                })
            }}
        >
            {color}
        </a>
    </li>
)

const TagFilter = ({ colors, onClickHandler, onResetHandler }) => (
    <ul className={styles.filter}>
        {Object.keys(colors).map(color => (
            <Item key={color} color={color} onClickHandler={onClickHandler} />
        ))}
        <Item key="white" color="reset" onClickHandler={onResetHandler} />
    </ul>
)

export default connect(
    {
        colors: state`colors`,
        onClickHandler: signal`filter`,
        onResetHandler: signal`resetFilter`
    },
    TagFilter
)
