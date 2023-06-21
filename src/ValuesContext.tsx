import { useState, createContext } from 'react';
export type ListContext = {
	id: number;
	title: string;
	isPending: boolean;
};

type ValuesPType = {
	children: React.ReactNode;
};

export type valuesTypes = {
	todos: ListContext[] | [];
	saveTodo: (todo: string) => void;
	updateTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
	clearCompleted: () => void;
	updateList: (todo: ListContext[]) => void;
};

const localTodos: ListContext[] = JSON.parse(
	localStorage.getItem('todos') || '[]'
);

export const ValuesContext = createContext<valuesTypes | []>([]);

export const ValuesProvider = ({ children }: ValuesPType) => {
	const [todos, setTodos] = useState<ListContext[] | []>(localTodos);

	const saveTodo = (todo: string) => {
		const newTodo: ListContext = {
			id: Math.random(),
			title: todo,
			isPending: true,
		};
		setTodos(prev => [...prev, newTodo]);
		localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
	};

	const updateTodo = (id: number) => {
		todos.filter((todo: ListContext) => {
			if (todo.id === id) {
				todo.isPending = !todo.isPending;
				setTodos([...todos]);
			}
		});
	};

	// delete a todo from the list using its id
	const deleteTodo = (id: number) => {
		const newList = todos.filter((todo: ListContext) => todo.id !== id);
		setTodos(newList);
		localStorage.setItem('todos', JSON.stringify(newList));
	};

	// remove todos that have been marked as completed
	const clearCompleted = () => {
		const newList = todos.filter(todo => todo.isPending === true);
		setTodos(newList);
		localStorage.setItem('todos', JSON.stringify(newList));
	};

	// ??
	const updateList = (todo: ListContext[]) => {
		setTodos(todo);
	};

	return (
		<ValuesContext.Provider
			value={{
				todos,
				saveTodo,
				updateTodo,
				deleteTodo,
				clearCompleted,
				updateList,
			}}
		>
			{children}
		</ValuesContext.Provider>
	);
};

// export const useValues = () => useContext(ValuesContext);
