
import { Dashboard } from './components/dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { TransactionsContext } from './TransactionsContext';

import { NewTransactionModal } from './components/NewTransactionModal';

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
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard/>
        
      <NewTransactionModal
        isOpen = {IsNewTransactionModalOpen}
        OnRequestClose = {handleCloseCNewTransactionModal}
      />

      <GlobalStyle></GlobalStyle>
    </TransactionsContext.Provider>
  );
}
