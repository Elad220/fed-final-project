export const getExpense = () => JSON.parse(localStorage.getItem('expenses')) || [];

export const setExpense = expenses => {
  localStorage.setItem('expenses', JSON.stringify(expenses));
};

// export const addExpense = expense => {
//   const expenses = getExpense();
//   setExpense([...expenses, expense]);
// };
export const addExpense = expense => {
  try {
    const expenses = getExpense();
    setExpense([...expenses, expense]);
  } catch (error) {
    console.error(`Error adding expense: ${error}`);
  }
};

export const deleteExpense = expenseId => {
  const expenses = getExpense();
  const updatedExpenses = expenses.filter((expense) => expenseId !== expense.id);
  setExpense(updatedExpenses);
  return updatedExpenses;
};

export const editExpense = (expense) => {
  const expenses = getExpense();
  const updatedExpenses = expenses.map((exp) => (exp.id === expense.id ? expense : exp));
  setExpense(updatedExpenses);
  return updatedExpenses;
};
