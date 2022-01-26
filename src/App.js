import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenseInput/NewExpense';
import Card from './components/UI/Card';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },

  ];


  const handleAddToExpenses = (expensesData) => {
    expenses.push(expensesData)
  }

  return (
    <Card className="App">

      <NewExpense onAddExpenses={handleAddToExpenses} />
      <Expenses expenses={expenses} />
    </Card>
  );
}

export default App;
