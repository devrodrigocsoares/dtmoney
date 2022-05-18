import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer ({

    models: {

      transaction: Model,

    },

    seeds(server){
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freenlancer Website',
            type: 'deposit',
            category: 'dev',
            amount: 600,
            createdAt: new Date('2022-01-01 09:00:00')
          },

          {
            id: 2,
            title: 'Freenlancer Mobile',
            type: 'deposit',
            category: 'dev',
            amount: 900,
            createdAt: new Date('2019-03-14 17:00:00')
          }
        ],

      })
    },

  routes(){
    this.namespace = 'api';
    this.get('transactions/', () =>{
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody);
      
      return schema.create('transaction',data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
