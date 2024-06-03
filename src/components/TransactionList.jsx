import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import TransactionComponent from './TransactionComponent';


function TransactionList() {

const {transactions} = useSelector(state => state.transactionStore);

  return (
    <div className="p-6 bg-white shadow-2xl rounded-xl transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-bold mb-4 border-b pb-2 text-indigo-600">History</h3>
        <ul>
          {transactions.map(transaction => (<TransactionComponent key={transaction.id} transaction={transaction} />))}
            
        </ul>
    </div>
  )
}

export default TransactionList;
