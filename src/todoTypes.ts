export type TodoType = {
	id: string;
	title: string;
	pending: boolean;
};

export type TodoContextType = {
	todos: TodoType[] | [];
	saveTodo: (todo: string) => void;
	updateTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
	clearCompleted: () => void;
	//updateList: (todo: TodoType[]) => void;
};
