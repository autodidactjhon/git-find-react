import React from 'react';
import './index.css';

function Section(props){
	const { flex } = props

	const style = {
		section: {
			flex: flex
		}
	}

	return (
		<div className="Section" style={style.section}>
			{props.children}
		</div>
	)
}

export default Section;