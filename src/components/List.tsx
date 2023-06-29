import styled from 'styled-components';
import { useState } from 'react';
import Item from './Item';
import { TodoType } from '../todoTypes';
import {
	DragDropContext,
	DropResult,
	Droppable,
	Draggable,
} from 'react-beautiful-dnd';
import Section from './Section';

type Props = {
	todos: TodoType[] | [];
	updateTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
	clearCompleted: () => void;
	//updateList: (todo: TodoType[]) => void;
};

const List = ({ todos, updateTodo, deleteTodo, clearCompleted }: Props) => {
	//handle all, completed and active
	const [query, setQuery] = useState<boolean | null>(null);

	const filtereditems = todos.filter(todo => todo.pending === query);

	const views = (action: string) => {
		if (action === 'completed') {
			// show all completed items on the list
			setQuery(false);
		} else if (action === 'pending') {
			// show todos not yet completed
			setQuery(true);
		} else {
			// show all todos
			setQuery(null);
		}
	};

	// use the filtered list only when the active or completed button is clicked and query is set (not null)
	const currentList = query === null ? todos : filtereditems;

	// handle drag
	const handleOnDragEnd = (results: DropResult) => {
		console.log(results);
		const { source, destination } = results;

		if (!destination) return;
		if (
			destination.droppableId === source.droppableId &&
			source.index === destination.index
		)
			return;
		const reorderedList = [...currentList];
		const [removedList] = reorderedList.splice(source.index);

		reorderedList.splice(destination.index, 0, removedList);
		console.log(reorderedList);
	};
	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId='todos' type='group'>
				{provided => (
					<ListStyles {...provided.droppableProps} ref={provided.innerRef}>
						{currentList.map((todo, index) => (
							<Draggable key={todo.id} draggableId={todo.id} index={index}>
								{provided => (
									<div
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										ref={provided.innerRef}
									>
										<Item
											{...todo}
											updateTodo={updateTodo}
											deleteTodo={deleteTodo}
										/>
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
						<LastStyles>
							<span>{currentList.length} items left</span>
							<Section views={views} />
							<button onClick={clearCompleted} className='button'>
								Clear completed
							</button>
						</LastStyles>
					</ListStyles>
				)}
			</Droppable>
			<DisplayStyles>
				<Section views={views} />
			</DisplayStyles>
		</DragDropContext>
	);
};

export default List;

const ListStyles = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.mainBg};
	border-radius: 5px;
	padding: 0.4rem 0.8rem;
`;

const LastStyles = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.7rem 0 0.5rem;

	button {
		background-color: inherit;
		border: none;
	}

	.button {
		color: ${({ theme }) => theme.colors.text};
	}

	div {
		display: none;
	}

	@media screen and (min-width: 900px) {
		div {
			display: flex;
		}
	}
`;

const DisplayStyles = styled.div`
	width: 100%;

	margin-top: 2rem;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.mainBg};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 0;

	@media screen and (min-width: 900px) {
		display: none;
	}
`;
