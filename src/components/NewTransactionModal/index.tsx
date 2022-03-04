import Modal from 'react-modal';

interface NewTransctionModalProps {
  isOpen: boolean;
  OnRequestClose: ()=> void;
}

export function NewTransactionModal ({isOpen,OnRequestClose}:NewTransctionModalProps){
  return (

    <Modal 
        isOpen={isOpen}
        onRequestClose={OnRequestClose}
      >
          <h2>Cadastrar Transações</h2>
      </Modal>
  );
}