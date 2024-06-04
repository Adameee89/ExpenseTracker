import React from 'react';
import { useSelector } from 'react-redux';

function BalanceComponent() {


  const {transactions} = useSelector(state => state.transactionStore);


  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="p-6 bg-white shadow-2xl rounded-xl transition-transform transform hover:scale-105 mb-6">
      <h4 className="text-2xl font-bold text-gray-600">Your Balance</h4>
      <h1 className="text-4xl font-bold text-indigo-600">${total}</h1>
    </div>
  )
}

export default BalanceComponent;
