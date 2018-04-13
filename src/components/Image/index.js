import React from 'react';
import './index.css';

function Image(props){
	const { src, alt, width, height } = props

	const style = {
		image: {
			height: 'auto',
			widht: 'auto',
			maxHeight: height,
			maxWidht: width
		}
	}
	
	return (
		<img className="Image" src={src} alt={alt} style={style.image} />
	)
}

export default Image;