import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemonSlice';
import { todosApi } from '../apiTodo/todoApi';

export const store = configureStore({
	reducer: {
		pokemon: pokemonReducer,

		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todosApi.middleware),
});
