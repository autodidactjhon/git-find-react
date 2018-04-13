import React from 'react';
import './index.css';

//Components
import Button from '../../components/Button';

class FormLogin extends React.Component {
	
	handleSubmit(e){
		e.preventDefault();
		let name = document.getElementById('inputLogin').value;
		localStorage.setItem('user', name);
		window.location.href = "/search";
	}

	render(){
		
		const style = {
			padding: {
				padding: '10px 20px'
			}
		}

		return (
			<form className="FormLogin" onSubmit={this.handleSubmit}>
				<span className="titleLogin">GITFIND</span>
				<input className="inputLogin" id="inputLogin" type="text" placeholder="Ingresa tu nombre"/>
				<Button value="ENTRAR" style={style} />
			</form>
		)		
	}
}

export default FormLogin;