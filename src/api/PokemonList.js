import { createAsyncThunk } from '@reduxjs/toolkit';
import { customFetch } from './pokemonAPI';

export const fetchDataPokemon = createAsyncThunk(
	'pokemons/fetchDataPokemon',
	async (page, thunkAPI) => {
		console.log(page);
		try {
			console.log(page);
			const response = await customFetch.get(`?limit=20&offset=${page}`);

			console.log(response);
			return response.data.results;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
