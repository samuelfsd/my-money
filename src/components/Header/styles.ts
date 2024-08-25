import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({theme}) => theme["english-violet"]};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${({theme}) => theme.cream};
  }
`

export const NewTransactionButton = styled.button`
  height : 50px;
  border: 0;
  background: ${({theme}) => theme["green-500"]};
  color: ${({theme}) => theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;



  &:hover {
    background-color: ${({theme}) => theme["green-700"]};;
  }

`