import styled from 'styled-components';
import { useState, useMemo, MutableRefObject } from 'react';
import Item from './Item';
import { TodoContextType } from '../todoTypes';
import {
  DragDropContext,
  DropResult,
  Droppable,
  Draggable,
} from 'react-beautiful-dnd';
import Section from './Section';
import { useTodo } from '../useTodo';

type ListProps = {
  inputRef: MutableRefObject<HTMLInputElement>;
};

const List = ({ inputRef }: ListProps) => {
  const { todos, deleteTodo, updateTodo, clearCompleted, updateTodoList } =
    useTodo() as TodoContextType;
  //
  const [query, setQuery] = useState<string>('all');

  const filtereditems = useMemo(() => {
    return todos.filter(todo => {
      switch (query) {
        case 'active':
          return todo.pending;
        case 'completed':
          return !todo.pending;
        default:
          return todo;
      }
    });
  }, [query, todos]);

  // get number of todos still pending
  const itemsLeft = todos.filter(todo => todo.pending).length;

  // handle reordering of todo list on drag and drop
  const handleOnDragEnd = (results: DropResult) => {
    const { source, destination } = results;

    // when todo item position is not changed on the list do nothing
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      source.index === destination.index
    )
      return;

    // reorder todo list

    const reorderedList = [...filtereditems]; // copy current todo list

    // select the item being dragged
    const [removedTodo] = reorderedList.splice(source.index, 1);

    reorderedList.splice(destination.index, 0, removedTodo);
    updateTodoList(reorderedList);
  };

  if (todos.length === 0)
    return (
      <EmptyList>
        <p>No todo item yet</p>
        <button type='button' onClick={() => inputRef.current.focus()}>
          click to add todo
        </button>
      </EmptyList>
    );

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='todos' type='group'>
          {provided => (
            <ListStyles {...provided.droppableProps} ref={provided.innerRef}>
              {filtereditems.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {provided => (
                    <ItemWrap
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Item
                        {...todo}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                      />
                    </ItemWrap>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}

              <LastStyles>
                <span>{`${itemsLeft} item${itemsLeft > 1 ? 's' : ''
                  } left`}</span>
                <Section views={setQuery} query={query} />
                <button onClick={clearCompleted} className='button'>
                  Clear completed
                </button>
              </LastStyles>
            </ListStyles>
          )}
        </Droppable>
      </DragDropContext>
      <DisplayStyles>
        <Section views={setQuery} query={query} />
      </DisplayStyles>
    </>
  );
};

export default List;

const ListStyles = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 0.5rem;
`;

const LastStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3.2rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.faint};

  button {
    background-color: inherit;
    border: none;
  }

  .button {
    color: ${({ theme }) => theme.colors.faint};
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
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  height: 3.2rem;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const ItemWrap = styled.div`
  padding: 0 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.faint};
`;

const EmptyList = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 1rem;
  gap: 0.4rem;

  button {
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0.6rem 0.5rem;
    border-radius: 1rem;
    border: 0;
  }
`;
