import styled from 'styled-components';
import close from '../assets/icon-cross.svg';
//const type = 'List';

type itemProps = {
	id: string;
	pending: boolean;
	title: string;
	updateTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
};

const Item = ({ id, pending, title, updateTodo, deleteTodo }: itemProps) => {
	return (
		<ItemsStyles pending={pending}>
			<input
				type='checkbox'
				checked={!pending}
				onChange={() => updateTodo(id)}
				aria-label='mark todo as completed'
			/>
			<span aria-label='todo item'>{title}</span>
			<ImageStyles
				src={close}
				alt='close icon for deleting a todo item'
				onClick={() => deleteTodo(id)}
				aria-label='delete todo item'
				role='button'
			/>
		</ItemsStyles>
	);
};

export default Item;

const ItemsStyles = styled.div.attrs((props: { pending: boolean }) => props)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0.5rem 0;
	gap: 0.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.blur};
	cursor: pointer;
	text-decoration: ${({ pending }) => (pending ? 'none' : 'line-through')};
`;

const ImageStyles = styled.img`
	margin-left: auto;
	max-width: 10%;
`;
