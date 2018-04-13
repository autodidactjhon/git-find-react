import React from 'react';
import Wrapper from '../../components/Wrapper';
import Section from '../../components/Section';
import Image from '../../components/Image';
import FormLogin from '../../components/FormLogin';


function HomePage(props){

	return (
		<Wrapper color="#6ED3CF">
			<Section flex="0 1 50%">
				<Image src="https://octodex.github.com/images/goretocat.png" alt="" width="500px" height="500px" />
			</Section>
			<Section flex="0 1 50%">
				<FormLogin />
			</Section>
		</Wrapper>
	);
}

export default HomePage;