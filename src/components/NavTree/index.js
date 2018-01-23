import React from 'react'
import styles from '../SideBar/styles.css'

const NavTree = () => (
	<div className={styles.sideBar}>
		<ul className={styles.list}>
			<li><a href="/">Component 1</a>
				<ul>
					<li><a href="/">Sub component 1</a></li>
					<li><a href="/">Sub component 2</a></li>
					<li><a href="/">Sub component 3</a></li>
				</ul>
			</li>
			<li><a href="/">Component 2</a></li>
			<li><a href="/">Component 3</a>
				<ul>
					<li><a href="/">Sub component 4</a>
						<ul>
							<li><a href="/">Sub component 9</a></li>
							<li><a href="/">Sub component 10</a></li>
							<li><a href="/">Sub component 11</a></li>
						</ul>
					</li>
					<li><a href="/">Sub component 5</a></li>
					<li><a href="/">Sub component 6</a></li>
					<li><a href="/">Sub component 7</a></li>
				</ul>
			</li>
			<li><a href="/">Component 4</a></li>
			<li><a href="/">Component 5</a></li>
			<li><a href="/">Component 6</a></li>
			<li><a href="/">Component 7</a></li>
			<li><a href="/">Component 8</a></li>
			<li><a href="/">Component 9</a></li>
		</ul>
	</div>
)

export default NavTree