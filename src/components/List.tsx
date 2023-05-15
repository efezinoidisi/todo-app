import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';
import { ListContext } from '../ValuesContext';
import close from '../assets/icon-cross.svg';
import Section from './Section';
type Props = {
	todos: ListContext[] | [];
	updateTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
	clearCompleted: () => void;
	updateList: (todo: ListContext[]) => void;
};

const type = "List";

const List = ({
	todos,
	updateTodo,
	deleteTodo,
	clearCompleted,
	updateList,
}: Props) => {
	const myStyles: React.CSSProperties = {
		textDecoration: 'line-through',
	};
	const [items, setItems] = useState(todos);
	
	const ref = useRef(null);

	useEffect(() => {
		setItems(todos);
	}, [todos]);
	const views = (action: string) => {
		let newList;
		if (action === 'completed') {
			newList = todos.filter(todo => todo.isPending === false);
		} else if (action === 'pending') {
			newList = todos.filter(todo => todo.isPending === true);
		} else {
			setItems(todos);
			return;
		}

		setItems(newList);
	};
	return (
		<>
			<ListStyles>
				{items.map((todo, index) => (
					<ItemsStyles
						key={todo.id}
						style={!todo.isPending ? myStyles : undefined}
					>
						<input
							type='checkbox'
							checked={!todo.isPending}
							onChange={() => updateTodo(todo.id)}
						/>
						<span>{todo.title}</span>
						<ImageStyles
							src={close}
							alt='close todo'
							onClick={() => deleteTodo(todo.id)}
						/>
					</ItemsStyles>
				))}

				<LastStyles>
					<span>{items.length} items left</span>
					<Section views={views} />
					<button onClick={clearCompleted} className='button'>
						Clear completed
					</button>
				</LastStyles>
			</ListStyles>
			<DisplayStyles>
				<Section views={views} />
			</DisplayStyles>
		</>
	);
};

export default List;

const ListStyles = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.mainBg};
	border-radius: 5px;
	padding: 0.4rem 0.8rem;
`;

const ItemsStyles = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0.5rem 0;
	gap: 0.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.blur};
`;

const ImageStyles = styled.img`
	margin-left: auto;
	max-width: 10%;
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
