import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (<HeaderContainer>
    <HeaderContent>
      <h2>My Money</h2>

      <NewTransactionButton>Nova transação</NewTransactionButton>
    </HeaderContent>
  </HeaderContainer>)
}