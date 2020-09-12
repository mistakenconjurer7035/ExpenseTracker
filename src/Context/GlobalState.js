import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

//initial state
// Initial state
const initialState = {
  transactions: []
}

 //create context

export const GlobalContext = createContext(initialState);

//Provider con

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload:id
    });
  }

  //Add transaction

  function addTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload:transaction
    });
  }


  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
    

