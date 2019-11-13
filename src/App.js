import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CardList from './Components/CardList/CardList';

function App() {
	return (
		<div className='App'>
			<Header />
			<h1 className='title'>Our Planets</h1>
			<CardList />
		</div>
	);
}

export default App;
