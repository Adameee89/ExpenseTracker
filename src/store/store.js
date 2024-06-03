import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./transactionSlice";

const store = configureStore({
    reducer:{
        transactionStore: transactionSlice
    }
});

export default store;