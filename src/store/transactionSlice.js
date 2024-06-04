import {createSlice} from '@reduxjs/toolkit';

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transactions: [
            {id: 1, text: 'Flower', amount: -20},
            {id: 2, text: 'Salary', amount: 300},
            {id: 3, text: 'Book', amount: -10},
            {id: 4, text: 'Camera', amount: 150},
        ],
    },
    reducers: {

        addTransactionAction: (state, action) => {
            state.transactions.push(action.payload);
        }, 
        deleteTransactionAction: (state, action) => {
            state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
        } 
        
       

    }
    
});

export const {addTransactionAction, deleteTransactionAction} = transactionSlice.actions;
export default  transactionSlice.reducer;   