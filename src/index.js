import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import TodoApp from './TodoApp';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<TodoApp />
		</Provider>
	</React.StrictMode>
);
