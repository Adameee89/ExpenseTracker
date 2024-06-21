import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function IncomeExpenses() {

    const {transactions} = useSelector(state => state.transactionStore);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);


  return (
    <div className=" flex  justify-between bg-white shadow-2xl p-6 rounded-xl transition-transform transform hover:scale-105">
        <div className="w-1/2  pr-6 border-r">
            <h4 className="text-2xl font-bold mb-2 text-green-500 flex items-center">
                <FaArrowUp className="mr-2" /> Income
            </h4>
            <p className="text-lg font-medium md:text-2xl lg:text-2xl">+${income}</p>
        </div>

        <div className="w-1/2 pl-6">
            <h4 className="text-2xl font-bold mb-2 text-red-500 flex items-center">
                <FaArrowDown className="mr-2" /> Expense
            </h4>
            <p className="text-lg font-medium md:text-2xl lg:text-2xl">-${expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses;
