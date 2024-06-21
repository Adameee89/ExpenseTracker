import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addTransactionAction } from '../store/transactionSlice';



function AddTransaction() {

    const [text, setText] = useState('');
    const [addTransaction, setTransaction] = useState()
    const [amount, setAmount] = useState(0);
    const {transactions} = useSelector(state => state.transactionStore);

    const dispatch = useDispatch();

    useEffect(() => {
        setTransaction( JSON.parse(localStorage.getItem('transactions')))
      }, [transactions])


    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        dispatch(addTransactionAction(newTransaction));
    }




  return (
    <div className="p-6 bg-white shadow-2xl rounded-xl mt-4 transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-bold mb-4 border-b pb-2 text-indigo-600">Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="mb-4">
                <label htmlFor='text' className="block text-sm font-medium mb-1">Text</label>
                <input 
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    type="text" 
                    placeholder="Enter text..." 
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium mb-1">Amount <br />
                    <span className="text-xs text-gray-500">(negative - expense, positive - income)</span>
                </label>
                <input 
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    type="number" 
                    placeholder="Enter amount..." 
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
            </div>
            <button
                type="submit" 
                className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-300 flex items-center justify-center"
            >
                <FaPlus className="mr-2" /> Add transaction
            </button>
        </form>
    </div>
  )
}

export default AddTransaction;