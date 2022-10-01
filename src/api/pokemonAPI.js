import axios from 'axios';

export const customFetch = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/pokemon',
});
