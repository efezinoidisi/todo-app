import styled from 'styled-components';

type SectionProps = {
  views: (action: string) => void;
  query: string;
};

type Props = {
  active: string;
};

const Section = ({ views, query }: SectionProps) => {
  const allViews = ['all', 'active', 'completed'];
  return (
    <DivStyles active={query}>
      {allViews.map(item => (
        <button
          key={item}
          onClick={() => {
            views(item);
          }}
          className={item}
        >
          {item}
        </button>
      ))}
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
    color: ${({ theme }) => theme.colors.faint};
    text-transform: capitalize;
  }

  .${props => props.active} {
    color: ${({ theme }) => theme.colors.background};
  }

  @media (min-width: 900px) {
    width: 39%;
    margin: 0;
    align-items: center;
  }
`;
