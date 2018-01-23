import React from 'react'
import Card from '../Card'
import styles from './styles.css'
import ReactMotionFlip from 'react-motion-flip'

const CardList = ({items}) => (
	<ul className={styles.CardList}>
		<ReactMotionFlip style={{ display: 'flex', flexFlow: 'row wrap' }}>
			{items.map(item => <Card key={item.id} path={item.path} />)}
		</ReactMotionFlip>
	</ul>
)

export default CardList