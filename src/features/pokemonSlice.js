import { createSlice } from '@reduxjs/toolkit';
import { fetchDataPokemon } from '../api/PokemonList';

const initialState = {
	isLoading: false,
	pokemon: [],
	page: 0,
	error: '',
};

export const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		pagination: (state) => {
			state.page += 10;
		},
	},
	extraReducers: {
		[fetchDataPokemon.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchDataPokemon.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.pokemon = action.payload;
		},
		[fetchDataPokemon.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const pokemonList = (state) => state.pokemon;

export const { pagination } = pokemonSlice.actions;

export default pokemonSlice.reducer;
