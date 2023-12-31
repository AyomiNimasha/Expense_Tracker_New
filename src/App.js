import React from 'react';
import { Header} from './components/Header';
import { Balance} from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import './App.css';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
//import {GlobalProvider} from './context/GlobalState';
function App() {
  
    return (
      <div>
        <Header/>
        <div>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div>      
      </div>
    );
  }


export default App;
