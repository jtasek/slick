import React from 'react'
import styles from 'styles.css'

const TreeNode = ({node}) => (
	<li class="checked">
		<label>{node.title}</label>
		{node.components ? <TreeNodeList nodes={node.components} /> : null}
	</li>
)

const TreeNodeList = ({nodes}) => (
	<ul>
		{nodes.map(x => <TreeNode node={x} />)}
	</ul>
)

const TreeView = ({nodes}) => (
	<div className={styles.treeView}>
		<TreeNodeList nodes={nodes} />
	</div>
)

export default TreeView