import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({theme}) => theme["ash-gray"]};
    color: white;
    padding: 1rem;

    &::placeholder {
      color: white;
    }
  }

  button {
    display: flex;
    align-items: center;

    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background:transparent;
    border: 1px solid ${({theme}) => theme["green-500"]};
    color: ${({theme}) => theme["green-500"]};
    font-weight: bold;
    border-radius: 6px;

    &:hover{
      background: transparent;
      border: 1px solid ${({theme}) => theme["green-700"]};
      color: ${({theme}) => theme["green-700"]};
      transition: background-color 0.2s;
    }
  }
`
