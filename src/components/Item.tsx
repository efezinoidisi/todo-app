import styled from 'styled-components';
import close from '../assets/icon-cross.svg';
import icon from '../assets/icon-check.svg';

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
			<Checkbox>
				<input
					type='checkbox'
					checked={!pending}
					onChange={() => updateTodo(id)}
					aria-label='mark todo as completed'
				/>
				{!pending && <img src={icon} alt='' onClick={() => updateTodo(id)} />}
			</Checkbox>
			<p aria-label='todo item'>{title}</p>
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
	padding: 0;
	height: 3.2rem;
	gap: 1rem;
	font-size: 1rem;

	cursor: pointer;
	text-decoration: ${({ pending }) => (pending ? 'none' : 'line-through')};
	text-decoration-thickness: 0.1rem;

	p {
		overflow-x: hidden;
	}
`;

const ImageStyles = styled.img`
	margin-left: auto;
	width: 1.1rem;
`;

const Checkbox = styled.span`
	position: relative;
	width: fit-contents;
	height: max-contents;
	display: inline-block;
	border-radius: 50%;

	input {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		width: 1.25rem;
		height: 1.25rem;
		border: 1px solid ${({ theme }) => theme.colors.faint};
		border-radius: 50%;
		outline: none;
		cursor: pointer;
	}

	input:checked {
		background: linear-gradient(
			to right,
			hsl(192, 100%, 67%),
			hsl(280, 87%, 65%)
		);
		border: none;
	}

	img {
		position: absolute;
		top: 50%;
		width: 80%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
	}
`;
