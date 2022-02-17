import logoimg from '../../assets/logo.svg'
import { Container, Content } from './style'

interface HeaderProps{
  onOpenNewTransaction: () => void;
}

export function Header ({onOpenNewTransaction}:HeaderProps){
  return(
    <Container>
      <Content>
        <img src={logoimg}  alt="dt money"></img>
        <button type="button" onClick={onOpenNewTransaction}>
          Nova Transação
        </button>
      </Content>
    </Container>
 
  )
}