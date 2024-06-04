import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionAction } from '../store/transactionSlice';

function TransactionComponent({transaction}) {

  const {transactions} = useSelector(state => state.transactionStore);

  const dispatch = useDispatch();



  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'flex justify-between items-center mb-4 p-4 border-b hover:bg-gray-50 transition-colors duration-300 text-red-500'  : 
    'text-green-500 flex justify-between items-center mb-4 p-4 border-b hover:bg-gray-50 transition-colors duration-300'}>
                <span className="text-xl">{transaction.text}</span>
                <span className={transaction.amount < 0 ?  'text-xl text-red-500' : 'text-xl text-green-500'}>{sign}${Math.abs(transaction.amount)}</span>
                <button 
                className={transaction.amount < 0 ? 'text-red-500 hover:text-red-700 transition-colors duration-300' 
                : 'text-green-500 hover:text-green-700 transition-colors duration-300'}
                onClick={() => dispatch(deleteTransactionAction(transaction.id))}
                >
                    <FaTrashAlt />
                </button>
   </li>
  )
}

export default TransactionComponent