import { useState } from 'react'
import logoimg from '../../assets/logo.svg'
import { Container, Content } from './style'
import Modal from 'react-modal';


export function Header (){

  const [IsNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal (){
    SetIsNewTransactionModalOpen(true);
    
  }

  function handleCloseCNewTransactionModal (){
    SetIsNewTransactionModalOpen(false);

  }

  return(
    <Container>
      <Content>
        <img src={logoimg}  alt="dt money"></img>
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova Transação
        </button>

        <Modal 
        isOpen={IsNewTransactionModalOpen}
        onRequestClose={handleCloseCNewTransactionModal}
        >
          <h2>Cadastrar Transações</h2>
        </Modal>
      </Content>
    </Container>
 
  )
}