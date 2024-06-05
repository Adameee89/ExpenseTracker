import {createSlice} from '@reduxjs/toolkit';

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transactions: []
    },
    reducers: {

        addTransactionAction: (state, action) => {
            console.log(action.payload);
            state.transactions = [...state.transactions, action.payload];
        }, 
        deleteTransactionAction: (state, action) => {
            state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);

            localStorage.setItem('transactions', JSON.stringify(state.transactions));
        } 
        
       

    }
    
});

export const {addTransactionAction, deleteTransactionAction} = transactionSlice.actions;
export default  transactionSlice.reducer;   