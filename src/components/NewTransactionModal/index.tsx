import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './Style';

import closeImg from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransctionModalProps {
  isOpen: boolean;
  OnRequestClose: ()=> void;
}

export function NewTransactionModal ({isOpen,OnRequestClose}:NewTransctionModalProps){
  const [type,settype] = useState('deposit')
  
  return (

    <Modal 
        isOpen={isOpen}
        onRequestClose={OnRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
          <button 
          type='button' 
          onClick={OnRequestClose} 
          className="react-modal-close"
          >
          <img src={closeImg} alt="modal" />
          </button>

          <Container>
            <h2>Cadastrar Transações</h2>

            <input 
              placeholder='Titulo'
            />

            <input type="number" 
              placeholder='Valor'
              />

            <TransactionTypeContainer>
              <RadioBox
                type="button"
                onClick={() => {settype('deposit'); }}
                isActive = {type === 'deposit'}
              >
                <img src={income} alt="Entrada" />
                <span>Entrada</span>

              </RadioBox>
              
              <RadioBox
                type="button"
                onClick={() => {settype('withdrawn'); }}
                isActive = {type === 'withdrawn'}
              >
                <img src={outcome} alt="Saída"/>
                <span>Saída</span>

              </RadioBox>
            </TransactionTypeContainer>

            <input
              placeholder='Categoria'
            />

            <button type='submit'>
              Cadastrar
            </button>

          </Container>
      </Modal>
  );
}