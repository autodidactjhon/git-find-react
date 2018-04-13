import React from 'react';
import Wrapper from '../../components/Wrapper';
import Section from '../../components/Section';
import Header from '../../components/Header';
import RepoCards from '../../components/RepoCards';
import './style.css';

class SearchPage extends React.Component {

	constructor(props){
		super(props)
		this.user = localStorage.getItem("user");
		this.word = null;
	}

	handleSubmit(e){
		e.preventDefault();
		let textSearch = document.getElementById("inputSearch").value
		SearchPage.getApi(textSearch);
	}

	static getApi(textSearch){
		let url = "https://api.github.com/search/repositories?q="+textSearch+"&sort=stars&order=desc";
		console.log(url);
		
		fetch(url)
			.then(data => { return data.json() })
			.then(data => { SearchPage.processData(data.items) /*console.log(data.items);*/ })
			.catch(error => { console.log(error) })
	}

	static processData(items){
		console.log(items);
		items.map(item => {
			const { id, name, description, stargazers_count, html_url } = item;
			console.log( id, name, description, stargazers_count, html_url )
			let card = `<div class="card">
										<div class="card-title">${name}</div>
										<div class="card-description">${description}</div>
										<div class=""card-starts>${stargazers_count}</div>
										<div class="card-button"><a href="${html_url}">VISITAR REPO</a></div>
										<div class="card-favorita">*</div>
									</div>`;
			let cards = document.getElementById("cards");
			cards.innerHTML += card;
		});
	}

	render(){
		return (
			<Wrapper color="#FFFFFF">
				<Header user={this.user} handleSubmit={this.handleSubmit}/>
				<Section flex="0 1 65%">				
					<RepoCards word={this.word}/>
					<div id="cards">
					</div>
				</Section>
				<Section flex="0 1 35%">
				</Section>
			</Wrapper>
		);		
	}
}

export default SearchPage;