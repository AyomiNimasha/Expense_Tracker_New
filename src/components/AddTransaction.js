import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState('');

    const{AddTransaction}=useContext(GlobalContext);
    const onsubmit=e=>{
      e.preventDefault();

      const newTransaction={
        id:Math.floor(Math.random()*100000000),
        text,
        amount:+amount
      }
      AddTransaction(newTransaction);
    }
  return (
    <div>
        <h3>Add New transaction</h3>
        <form onSubmit={onsubmit}>
            <div className='form-control'>
                 <label htmlFor='text'>Text</label>
                 <input id='text' type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Text...'/>
            </div>
            <div className='form-control'>
                 <label htmlFor='amount'>Amount <br/>
                 (negative - expense,positive - income)</label>
                 <input id='amount' type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter Amount...'/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </div>
  )
}
