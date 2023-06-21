
import { ValuesContext, valuesTypes } from '../ValuesContext';
// import desktopLightImg from '../assets/bg-desktop-light.jpg';
import { useState, useContext } from 'react';
import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';
import List from './List';
//import {ValuesContext} from "../ValuesContext"
interface HomeProps {
	toggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
	dark: string;
}
// type objType = {
// 	items: [];
// 	setItems: React.Dispatch<React.SetStateAction<never[]>>;
// };

//let id = 0;
const Home = ({ toggle, dark }: HomeProps) => {
	const { todos, saveTodo, deleteTodo, updateTodo, clearCompleted, updateList } = useContext(
		ValuesContext
	) as valuesTypes;
	const [todo, setTodo] = useState('');
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			saveTodo(todo);
			setTodo('');
		}
	};
	return (
		<>
			<HeaderStyles>
				<HeaderContents>
					<FirstStyles>
						<h1>todo</h1>
						<ButtonStyles onClick={toggle}>
							{dark === 'dark' ? <BsSun /> : <BsMoon />}
						</ButtonStyles>
					</FirstStyles>
					<InputStyles
						type='text'
						name='add-todo'
						placeholder='Create a new todo...'
						onKeyPress={handleKeyDown}
						value={todo}
						onChange={e => setTodo(e.target.value)}
					/>
				</HeaderContents>
			</HeaderStyles>

			<MainStyles>
				<List
					todos={todos}
					deleteTodo={deleteTodo}
					updateTodo={updateTodo}
					clearCompleted={clearCompleted}
					updateList={updateList}
				/>
			</MainStyles>
		</>
	);
};

export default Home;

const ButtonStyles = styled.button`
	background-color: inherit;
	border: none;
	font-size: 1.5rem;
	display: flex;
	height: fit-content;
	color: #fff;
`;

const FirstStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0rem 0 2rem;
	background-repeat: no-repeat;
	& h1 {
		color: #fff;
		text-transform: uppercase;
		letter-spacing: 5px;
	}
`;

const HeaderStyles = styled.header`
	padding: 3rem 0;
	width: 100%;
	background-image: ${({ theme }) => `url(${theme.pictures.mobile})`};
	background-repeat: no-repeat;
	background-size: cover;

	@media only screen and (min-width: 900px) {
		background-image: ${({ theme }) => `url(${theme.pictures.desktop})`};
	}
`;

const InputStyles = styled.input`
	background-color: ${({ theme }) => theme.colors.mainBg};
	border: none;
	border-radius: 5px;
	width: 100%;
	padding: 0.6rem 0.9rem;
	color: ${({theme}) => theme.colors.text}
`;


const HeaderContents = styled.div`
	width: 85%;
	margin: 0 auto;

	@media only screen and (min-width: 600px) {
		width: 50%;
	}
`;


const MainStyles = styled.main`
	width: 85%;
	margin: -1.5rem auto 1rem;
	border-radius: 5px;

	@media only screen and (min-width: 600px) {
		width: 50%;
	}
`;