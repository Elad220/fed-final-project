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

export const deleteExpense = index => {
  const expenses = getExpense();
  const updatedExpenses = expenses.filter((_, i) => i !== index);
  setExpense(updatedExpenses);
};

export const editExpense = (index, expense) => {
  const expenses = getExpense();
  const updatedExpenses = expenses.map((exp, i) => (i === index ? expense : exp));
  setExpense(updatedExpenses);
};
