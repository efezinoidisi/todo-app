import styled from 'styled-components';
//import { useState } from 'react';
type SectionProps = {
	views: (action: string) => void;
	query: string;
};

type Props = {
	active: string;
};

const Section = ({ views, query }: SectionProps) => {
	return (
		<DivStyles active={query}>
			<button
				onClick={() => {
					views('all');
				}}
				className='all'
			>
				all
			</button>
			<button
				onClick={() => {
					views('pending');
				}}
				className='pending'
			>
				active
			</button>
			<button
				onClick={() => {
					views('completed');
				}}
				className='completed'
			>
				completed
			</button>
		</DivStyles>
	);
};

export default Section;

const DivStyles = styled.div<Props>`
	width: 50%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;

	button {
		background-color: inherit;
		border: none;
		color: ${({ theme }) => theme.colors.blur};
		text-transform: capitalize;
	}

	.${props => props.active} {
		color: hsl(220, 98%, 61%);
	}

	@media (min-width: 900px) {
		width: 39%;
		margin: 0;
		align-items: center;
	}
`;
