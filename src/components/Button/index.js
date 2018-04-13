import React from 'react';
import './index.css';

function Button(props){
	const { value, style } = props
	
	return (
		<input className="Button" type="submit" value={value} style={style.padding} />
	)
}

export default Button;