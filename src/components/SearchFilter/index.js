import React from 'react'
import styles from './styles.css'
import { connect } from '@cerebral/react'
import { props, signal, state } from 'cerebral/tags'

const Item = ({ onClick, value }) => (
  <li>
    <a
      href="#"
      className={styles.search}
      onClick={e => {
        e.preventDefault()
        onClick({
          value
        })
      }}
    >
      {value}
    </a>
  </li>
)

const SearchFilter = ({ searches, onClick, onReset }) => (
  <ul className={styles.colorFilter}>
    {searches.map(value => (
      <Item key={value} value={value} onClick={onClick} />
    ))}
    <Item key="reset" value="reset" onClick={onReset} />
  </ul>
)

export default connect(
  {
    searches: state`searches`,
    onClick: signal`tagClicked`,
    onReset: signal`searchReset`
  },
  SearchFilter
)
