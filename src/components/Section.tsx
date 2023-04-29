import styled from 'styled-components';
import { useState } from 'react';
type SectionProps = {
	views: (action: string) => void;
};

type Props = {
    active: string;
}

const Section = ({ views }: SectionProps) => {
	const [active, setActive] = useState('all');
	return (
		<DivStyles active={active}>
			<button
				onClick={() => {
					setActive('all');
					views('');
				}}
				className='all'
			>
				all
			</button>
			<button
				onClick={() => {
					setActive('pending');
					views('pending');
				}}
				className='pending'
			>
				active
			</button>
			<button
				onClick={() => {
					setActive('completed');
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
    
    @media (min-width:900px){
        width:30%;
        margin: 0;
        align-items: center;
        
    }
`;
