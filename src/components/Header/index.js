import React from 'react';
import './index.css';

//Components
import Button from '../../components/Button';

class Header extends React.Component {

	render(){

		const style = {
			padding: {
				padding: '10px 20px',
				display: 'inline-block'
			}
		}

		return (
			<header className="Header">
				<p>Hola <span>{this.props.user}</span> Bienvenido a <span>GITFIND</span></p>
				<form className="formSearch" onSubmit={this.props.handleSubmit}>
					<input className="inputSearch" id="inputSearch" type="text" placeholder="Ingrese la palabra a buscar"/>
					<Button id="formSearch" value="ENTRAR" style={style} />
				</form>
			</header>
		);		
	}
}

export default Header;

//<input type="button" value="Sludo" onClick={this.props.triggerSaludo}/>