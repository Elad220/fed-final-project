export const getExpense = async () =>
  JSON.parse(await localStorage.getItem("expenses")) || [];

export const setExpense = async (expenses) => {
  await localStorage.setItem("expenses", JSON.stringify(expenses));
};

export const addExpense = async (expense) => {
  try {
    const expenses = await getExpense();
    await setExpense([...expenses, expense]);
  } catch (error) {
    console.error(`Error adding expense: ${error}`);
  }
};

export const deleteExpense = async (expenseId) => {
  const expenses = await getExpense();
  const updatedExpenses = expenses.filter(
    (expense) => expenseId !== expense.id
  );
  await setExpense(updatedExpenses);
  return updatedExpenses;
};

export const editExpense = async (expense) => {
  const expenses = await getExpense();
  const updatedExpenses = expenses.map((exp) =>
    exp.id === expense.id ? expense : exp
  );
  await setExpense(updatedExpenses);
  return updatedExpenses;
};
