import { TodoContextType } from '../todoTypes';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';
import List from './List';
import { useTodo } from '../useTodo';
import { MutableRefObject } from 'react';
import { BsFillPlusSquareFill } from 'react-icons/bs';

type HomeProps = {
  toggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  theme: string;
};

const Home = ({ toggle, theme }: HomeProps) => {
  const { saveTodo, todos } = useTodo() as TodoContextType;

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  // new todo from input
  const [todo, setTodo] = useState('');

  // Add input from user to todo list
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // do nothing when user user input is  empty
    if (!todo) return;
    saveTodo(todo);
    setTodo('');
  };

  return (
    <>
      <HeaderStyles>
        <HeaderContents>
          <FirstStyles>
            <h1>todo</h1>
            <ButtonStyles onClick={toggle}>
              {theme === 'dark' ? <BsSun /> : <BsMoon />}
            </ButtonStyles>
          </FirstStyles>
          <FormStyle onSubmit={handleSubmit}>
            <span></span>
            <InputStyles
              type='text'
              name='add-todo'
              placeholder='Create a new todo...'
              value={todo}
              onChange={e => setTodo(e.target.value)}
              ref={inputRef}
            />
            <button type='submit'>
              <BsFillPlusSquareFill className='icon' />
            </button>
          </FormStyle>
        </HeaderContents>
      </HeaderStyles>

      <MainStyles>
        <List inputRef={inputRef} />
        {todos.length > 0 && (
          <p className='drag'>Drag and drop to reorder list</p>
        )}
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
  background-color: inherit;
  border: 0;
  width: 100%;
  height: 100%;
  padding-left: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

const HeaderContents = styled.div`
  width: 85%;
  margin: 0 auto;

  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 900px) {
    width: 40%;
  }
`;

const MainStyles = styled.main`
  width: 85%;
  margin: -1.5rem auto 1rem;
  border-radius: 5px;

  .drag {
    padding-block: 3rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.faint};
  }

  @media only screen and (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 900px) {
    width: 40%;
  }
`;

const FormStyle = styled.form`
  border: 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 8px;
  align-items: center;
  height: 3rem;
  padding-inline: 0.9rem;

  span {
    border: 1px solid ${({ theme }) => theme.colors.faint};
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
  }

  button {
    background-color: inherit;
    border: 0;
    outline: none;
  }

  .icon {
    color: ${({ theme }) => theme.colors.faint};
    font-size: 2.5rem;
  }
`;
