import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: none;
  border: ${({ theme }) => theme.colors.btn};
  align-self: center;
  width: 40%;
  padding: 0.5rem 0.3rem;
  border-radius: 1rem;
  transition-property: background-color, color;
  transition-delay: 0.3s;
  transition: cubic-bezier(0.5, 0, 0.5, 1);
  &:hover {
    background-color: blue;
    color: white;
  }
`;

const StyledInput = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.border};
  padding: 0.5rem 0.3rem;
  width: 100%;
  align-self: center;
  text-transform: capitalize;
  border-radius: 10px;
  outline: none;
`;

const StyledInputError = styled.p`
  color: red;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .form {
    background-color: ${({ theme }) => theme.colors.faint};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 90%;
    padding: 1rem;
    border-radius: 8px;
  }

  @media (min-width: 600px) {
    .form {
      width: 50%;
    }
  }

  @media (min-width: 900px) {
    .form {
      width: 40%;
    }
  }
`;

export { StyledButton, StyledInput, StyledInputError, Wrapper };
