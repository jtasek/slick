import React from 'react'
import styles from './styles.css'
import ViewTitle from '../ViewTitle'
import CardList from '../CardList'
import TagFilter from '../TagFilter'
import SearchFilter from '../SearchFilter'
import ActionLink from '../ActionLink'

const View = ({ title, items }) => (
    <div className={styles.view}>
        <ViewTitle title={title} />
        <TagFilter />
        <SearchFilter />
        {/* <ActionLink title="+ Add New Project" url="#/projects/new" /> */}
        <CardList items={items} />
    </div>
)

export default View
