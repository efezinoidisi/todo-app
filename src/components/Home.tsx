import darkImg from "../assets/bg-mobile-dark.jpg";
import lightImg from '../assets/bg-mobile-light.jpg';

import desktopDarkImg from '../assets/bg-desktop-dark.jpg';

import desktopLightImg from '../assets/bg-desktop-light.jpg';
import React from 'react';
import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';

interface HomeProps {
	toggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
	theme: string;
}

const Home = ({ toggle, theme }: HomeProps) => {
	return (
		<div>
			<header>
				<HeaderStyles
					url={theme === 'dark' ? darkImg : lightImg}
					desktop={theme === 'dark' ? desktopDarkImg : desktopLightImg}
				>
					<h1>To Do</h1>
					<ButtonStyles onClick={toggle}>
						{theme === 'dark' ? <BsSun /> : <BsMoon />}
					</ButtonStyles>
				</HeaderStyles>
				<input type='text' name='add-todo' placeholder='Create a new todo...' />
			</header>
		</div>
	);
};

export default Home;

const ButtonStyles = styled.button`
	background-color: inherit;
	border: none;
`;

const HeaderStyles = styled.div`
	display: flex;
	justify-content: space-between;
	background-image: ${props => `url(${props.url})`};
	background-repeat : no-repeat;

	@media only screen and (min-width: 900px) {
		background-image: ${props => `url(${props.desktop})`};
	}
`;