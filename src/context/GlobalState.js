import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

const initialState={
    transaction:[
        {id:1, text:'Flower',amount:-20},
        {id:2, text:'Salary',amount:300},
        {id:3, text:'Book',amount:-10},
        {id:4, text:'Camera',amount:150}
    ]
} 
//create context
export const GlobalContext=createContext(initialState);
//provider component
export const Globalprovider = ({children}) => {
    
    const[state,dispatch]=useReducer(AppReducer,initialState);
//Actions
function deleteTransaction(id) {
    dispatch({
        type:'DELETE TRANSACTION',
        payload:id
    });
  

}
function addTransaction(transaction) {
    dispatch({
        type:'ADD TRANSACTION',
        payload:transaction
    });
}   


  return (
    <GlobalContext.Provider value={
        {transaction:state.transaction,deleteTransaction,addTransaction}
    }>
        {children}
    </GlobalContext.Provider>
  );
};
