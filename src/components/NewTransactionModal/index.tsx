import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './Style';

import closeImg from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { api } from '../../services/api';


interface NewTransctionModalProps {
  isOpen: boolean;
  OnRequestClose: ()=> void;
}

export function NewTransactionModal ({isOpen,OnRequestClose}:NewTransctionModalProps){
  const [type,settype] = useState('deposit');

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  

  function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post('/transactions', data)
  }
  
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

          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transações</h2>

            <input 
              placeholder='Titulo'
              value={title}
              onChange={event=> setTitle(event.target.value)}
            />

            <input type="number" 
              placeholder='Valor'
              value={value}
              onChange={event => setValue(Number(event.target.value))}
              />

            <TransactionTypeContainer>
              <RadioBox
                type="button"
                onClick={() => {settype('deposit'); }}
                isActive = {type === 'deposit'}
                activeColor = "green"
              >
                <img src={income} alt="Entrada" />
                <span>Entrada</span>

              </RadioBox>
              
              <RadioBox
                type="button"
                onClick={() => {settype('withdrawn'); }}
                isActive = {type === 'withdrawn'}
                activeColor = "red"
              >
                <img src={outcome} alt="Saída"/>
                <span>Saída</span>

              </RadioBox>
            </TransactionTypeContainer>

            <input
              placeholder='Categoria'
              value={category}
              onChange={event => setCategory(event.target.value)}
            />

            <button type='submit'>
              Cadastrar
            </button>

          </Container>
      </Modal>
  );
}