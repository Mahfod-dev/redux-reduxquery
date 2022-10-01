import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataPokemon } from './api/PokemonList';
import { pokemonList } from './features/pokemonSlice';
import { pagination } from './features/pokemonSlice';

function App() {
	const dispatch = useDispatch();

	const { pokemon = [], page, isLoading, error } = useSelector(pokemonList);

	useEffect(() => {
		dispatch(fetchDataPokemon(page));
	}, [dispatch, page]);

	const handleMoreData = () => {
		dispatch(pagination());
	};

	if (isLoading) {
		return <h1>Loading</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<div className='App'>
			<h1>Pokemon</h1>

			{pokemon?.map((poke) => {
				return (
					<li style={{ listStyle: 'none' }} key={poke.url}>
						{poke.name}
					</li>
				);
			})}

			<button onClick={handleMoreData}>More</button>
		</div>
	);
}

export default App;
