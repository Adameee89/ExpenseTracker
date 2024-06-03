import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function IncomeExpenses() {
  return (
    <div className="flex justify-between bg-white shadow-2xl p-6 rounded-xl transition-transform transform hover:scale-105">
        <div className="w-1/2 pr-6 border-r">
            <h4 className="text-2xl font-bold mb-2 text-green-500 flex items-center">
                <FaArrowUp className="mr-2" /> Income
            </h4>
            <p className="text-3xl">+$0.00</p>
        </div>

        <div className="w-1/2 pl-6">
            <h4 className="text-2xl font-bold mb-2 text-red-500 flex items-center">
                <FaArrowDown className="mr-2" /> Expense
            </h4>
            <p className="text-3xl">-$0.00</p>
        </div>
    </div>
  )
}

export default IncomeExpenses;
