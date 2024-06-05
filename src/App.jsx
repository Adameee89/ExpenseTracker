import HeaderComponent from "./components/HeaderComponent"
import BalanceComponent from "./components/BalanceComponent"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"

//context


function App() {



  return (

    <div className="container mx-auto p-6">
        <HeaderComponent />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
                <BalanceComponent />
                <IncomeExpenses />
                <AddTransaction className="mt-8"/>
            </div>
            <div className="lg:col-span-8">
                <TransactionList />
            </div>
        </div>
    </div>
  );
}

export default App
