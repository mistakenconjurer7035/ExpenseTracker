import React,{useState,useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'



export const AddTransaction = () => {

  const [Text,setText] = useState('');
  const [Amount,setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext)

  const onSubmit = e =>{
    e.preventDefault();

    const newTransaction = {
      id : Math.floor(Math.random()*1000000),
      text:Text,
      amount:+Amount
    }
    addTransaction(newTransaction)
  }

    return (
        <div>
             <h3>Add new transaction</h3>
      <form onSubmit = {onSubmit}>
        <div className="form-control">
          <label >Text</label>
          <input value = {Text} onChange = {(e) => setText(e.target.value)} type="text"  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label 
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input value = {Amount} onChange = {(e) => setAmount(e.target.value)} type="number"  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </div>
    )
}
