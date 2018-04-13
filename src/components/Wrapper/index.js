import React from 'react';

//Styles
import './index.css';


/*export default class Wrapper extends React.PureComponent {

	render(){
		return (
			<div 
			className="Wrapper"
			color={color}
			>
				{text}
			</div>
		)
	}
}*/

function Wrapper(props){
	const { color } = props

	const style = {
		wrapper: {
			backgroundColor: color
		}
	}

	return (
		<div className="Wrapper" style={style.wrapper}>
			{props.children}
		</div>
	)
}

export default Wrapper;