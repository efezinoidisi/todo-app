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

export const ValuesContext = createContext<valuesTypes | []>([]);

export const ValuesProvider = ({ children }: ValuesPType) => {
	const [todos, setTodos] = useState<ListContext[] | []>([]);

	const saveTodo = (todo: string) => {
		const newTodo: ListContext = {
			id: Math.random(),
			title: todo,
			isPending: true,
		};
		setTodos([...todos, newTodo]);
	};

	const updateTodo = (id: number) => {
		todos.filter((todo: ListContext) => {
			if (todo.id === id) {
				todo.isPending = !todo.isPending;
				setTodos([...todos]);
			}
		});
	};

	const deleteTodo = (id: number) => {
		const newList = todos.filter((todo: ListContext) => todo.id !== id);
		setTodos(newList);
	};
	
	
	const clearCompleted = () => {
		const newList = todos.filter(todo => todo.isPending === true);
		setTodos(newList);
	}
	
	const updateList = (todo: ListContext[]) => {
		setTodos(todo);
	}
	
	
	return (
		<ValuesContext.Provider value={{ todos, saveTodo, updateTodo, deleteTodo, clearCompleted, updateList}}>
			{children}
		</ValuesContext.Provider>
	);
};

// export const useValues = () => useContext(ValuesContext);
