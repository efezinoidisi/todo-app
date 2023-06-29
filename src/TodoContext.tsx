import { useState, createContext } from 'react';
import { TodoContextType, TodoType } from './todoTypes';

type RType = {
	children: React.ReactNode;
};

// retrieve todos from local storage
const localTodos: TodoType[] = JSON.parse(
	localStorage.getItem('todos') || '[]'
);

export const TodosContext = createContext<TodoContextType | []>([]);

export const TodosProvider = ({ children }: RType) => {
	const [todos, setTodos] = useState<TodoType[] | []>(localTodos);

	const saveTodo = (todo: string) => {
		const date = new Date();
		const newTodo: TodoType = {
			id: `${date.getTime()}`,
			title: todo,
			pending: true,
		};
		setTodos(prev => [...prev, newTodo]);
		localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
	};

	const updateTodo = (id: string) => {
		const updatedTodos = todos.map((todo: TodoType) => {
			if (todo.id === id) {
				todo.pending = !todo.pending;
			}
			return todo;
		});
		setTodos(updatedTodos);
		localStorage.setItem('todos', JSON.stringify(updatedTodos));
	};

	// delete a todo from the list using its id
	const deleteTodo = (id: string) => {
		const newList = todos.filter((todo: TodoType) => todo.id !== id);
		setTodos(newList);
		localStorage.setItem('todos', JSON.stringify(newList));
	};

	// remove todos that have been marked as completed
	const clearCompleted = () => {
		const newList = todos.filter(todo => todo.pending === true);
		setTodos(newList);
		localStorage.setItem('todos', JSON.stringify(newList));
	};

	// ??
	// const updateList = (todo: TodoType[]) => {
	// 	setTodos(todo);
	// };

	return (
		<TodosContext.Provider
			value={{
				todos,
				saveTodo,
				updateTodo,
				deleteTodo,
				clearCompleted,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};

// export const useValues = () => useContext(TodosContext);
