import { useContext } from 'react';
import { TodosContext } from './TodoContext';

export const useTodo = () => useContext(TodosContext);
