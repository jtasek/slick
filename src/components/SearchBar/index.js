import React from 'react'
import Icon from '../Icon'
import styles from './styles.css'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'

const searchIcon = {
  group: 'action',
  name: 'search',
  color: 'rgba(0,0,0,.5)',
  size: 28
}

const SearchBar = ({ filter, searching, onChange }) => (
  <div className={styles.searchBar}>
    <form action="/search" method="get">
      <Icon {...searchIcon} />
      <input
        type="search"
        name="q"
        autoComplete="off"
        onChange={e => {
          if (!searching) {
            onChange({ value: e.target.value })
          }
        }}
      />
    </form>
  </div>
)

export default connect(
  {
    filter: state`filter`,
    searching: state`searching`,
    onChange: signal`searched`
  },
  SearchBar
)
