
import { Dashboard } from './components/dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');


export function App() {

      const [IsNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false);

      function handleOpenNewTransactionModal (){
        SetIsNewTransactionModalOpen(true);
      }

      function handleCloseCNewTransactionModal (){
        SetIsNewTransactionModalOpen(false);
      }

  return (
    <>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard/>
        
      <Modal 
        isOpen={IsNewTransactionModalOpen}
        onRequestClose={handleCloseCNewTransactionModal}
      >
          <h2>Cadastrar Transações</h2>
      </Modal>

      <GlobalStyle></GlobalStyle>
    </>
  );
}
