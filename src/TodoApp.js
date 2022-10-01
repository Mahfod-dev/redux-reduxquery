import { useState } from 'react';
import { useGetTodosQuery, useGetTodoQuery } from './apiTodo/todoApi';

const TodoApp = () => {
	// const { data: todos = [], isLoading } = useGetTodosQuery();
	const [todoId, setTodoId] = useState(0);

	const { data: todo, isLoading } = useGetTodoQuery(todoId);

	const nextTodo = () => {
		setTodoId(todoId + 1);
	};
	const prevTodo = () => {
		if (todoId === 1) return;
		setTodoId(todoId - 1);
	};
	console.log(todoId);

	return (
		<div className='App'>
			TodoApp
			<h2>RTK query</h2>
			<h4>loading : {isLoading ? 'True' : 'False'}</h4>
			{todo?.title}
			<hr />
			<div>
				<button onClick={prevTodo}>Prev</button>{' '}
				<button onClick={nextTodo}>Next</button>
			</div>
			{/* <ul>
				{todos.slice(0, 20).map((todo) => {
					return (
						<li style={{ listStyle: 'none' }} key={todo.id}>
							<strong>{todo.completed ? 'DONE' : 'PENDING'}</strong>{' '}
							{todo.title}
						</li>
					);
				})}
			</ul> */}
		</div>
	);
};
export default TodoApp;
