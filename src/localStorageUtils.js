/* Written by:
Elad Asaf - 208434597
Lidar Baruch - 207233545
Guy Ofir - 318597259
*/
/* An asynchronous function that retrieves expense data from localStorage by key 'expenses'
 and parses it as JSON. If no data is found, it returns an empty array. */
export const getExpense = async () =>
  JSON.parse(await localStorage.getItem('expenses')) || [];

/* An asynchronous function that saves the provided expenses to localStorage as a JSON string. */
export const setExpense = async (expenses) => {
  await localStorage.setItem('expenses', JSON.stringify(expenses));
};

/* An asynchronous function that adds a new expense object to the existing expenses stored in
 localStorage by first calling getExpense() and then appending the new expense object to the array.
  Finally, it saves the updated expenses to localStorage using setExpense(). */
export const addExpense = async (expense) => {
  try {
    const expenses = await getExpense();
    await setExpense([...expenses, expense]);
  } catch (error) {
    console.error(`Error adding expense: ${error}`);
  }
};

/* An asynchronous function that deletes an expense object from the stored expenses by first
 calling getExpense(), filtering out the expense with the provided expenseId, and saving the
  updated expenses using setExpense(). It then returns the updated expenses. */
export const deleteExpense = async (expenseId) => {
  const expenses = await getExpense();
  const updatedExpenses = expenses.filter(
    (expense) => expenseId !== expense.id
  );
  await setExpense(updatedExpenses);
  return updatedExpenses;
};

/* An asynchronous function that updates an existing expense object in the stored expenses by first
 calling getExpense(), replacing the expense object with the provided one (using the id property as
   the matching criteria), and saving the updated expenses using setExpense(). It then returns
    the updated expenses. */
export const editExpense = async (expense) => {
  const expenses = await getExpense();
  const updatedExpenses = expenses.map((exp) =>
    exp.id === expense.id ? expense : exp
  );
  await setExpense(updatedExpenses);
  return updatedExpenses;
};
