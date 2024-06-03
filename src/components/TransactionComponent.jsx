import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

function TransactionComponent({transaction}) {
  return (
    <li className="flex justify-between items-center mb-4 p-4 border-b hover:bg-gray-50 transition-colors duration-300">
                <span className="text-xl">{transaction.text}</span>
                <span className="text-xl text-red-500">-$400</span>
                <button className="text-red-500 hover:text-red-700 transition-colors duration-300">
                    <FaTrashAlt />
                </button>
   </li>
  )
}

export default TransactionComponent