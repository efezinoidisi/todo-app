//import { useDrag } from 'react-dnd/dist';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import close from '../assets/icon-cross.svg';
//const type = 'List';

type itemProps = {
	id: string;
	isPending: boolean;
	title: string;
	index: number;
	updateTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
};

const Item = ({
	id,
	index,
	isPending,
	title,
	updateTodo,
	deleteTodo,
}: itemProps) => {
	const myStyles: React.CSSProperties = {
		textDecoration: 'line-through',
	};

	// const [{ isDragging }, drag] = useDrag(() => ({
	// 	type: type,
	// 	collect: monitor => ({
	// 		isDragging: !!monitor.isDragging(),
	// 	}),
	// }));

	return (
		<Draggable draggableId={id} index={index}>
			{provided => (
				<ItemsStyles
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					style={!isPending ? myStyles : undefined}
				>
					<input
						type='checkbox'
						checked={!isPending}
						onChange={() => updateTodo(id)}
					/>
					<span>{title}</span>
					<ImageStyles
						src={close}
						alt='close todo'
						onClick={() => deleteTodo(id)}
					/>
				</ItemsStyles>
			)}
		</Draggable>
	);
};

export default Item;

const ItemsStyles = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0.5rem 0;
	gap: 0.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.blur};
	cursor: pointer;
`;

const ImageStyles = styled.img`
	margin-left: auto;
	max-width: 10%;
`;
