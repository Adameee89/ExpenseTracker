import React from 'react';

function BalanceComponent() {
  return (
    <div className="p-6 bg-white shadow-2xl rounded-xl transition-transform transform hover:scale-105 mb-6">
      <h4 className="text-2xl font-bold text-gray-600">Your Balance</h4>
      <h1 className="text-4xl font-bold text-indigo-600">$0.00</h1>
    </div>
  )
}

export default BalanceComponent;
