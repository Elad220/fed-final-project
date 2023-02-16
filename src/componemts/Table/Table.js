/* Written by:
Elad Asaf - 208434597
Lidar Baruch - 207233545
Guy Ofir - 318597259
*/
import React, { useEffect, useState } from 'react';
import {
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledThead,
  StyledTr,
  Button,
  FilterContainer,
  Select,
  StyledTfoot,
  Message,
  Label,
  SelectOption,
  ButtonWrapper,
  ClearFiltersButton
} from './styled';
import {
  getExpense,
  editExpense,
  deleteExpense,
} from '../../localStorageUtils';
import {
  categoriesOptions,
  years,
  months,
  emptyTableText,
  filterMonthText,
  filterYearText,
  descriptionHeaderText,
  createdDateHeaderText,
  costHeaderText,
  categoryHeaderText,
  itemHeaderText,
  saveButtonText,
  cancelButtonText,
  deleteButtonText,
  editButtonText,
  totalText,
  currencies,
  chooseCurrencyText,
} from '../../consts';
import SortIcon from '../SortIcon/sortIcon';

const Table = () => {
  /* This code defines several state variables using the useState hook, and sets their initial values.
   It also defines an effect that fetches data from localStorage and updates the expenses state variable
    when the component mounts. */
  const [expenses, setExpenses] = useState([]);
  const [editingExpenseId, setEditingExpenseId] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [currency, setCurrency] = useState(currencies[0].label);

  useEffect(() => {
    const fetchExpenses = async () => {
      const expensesFromLocalStorage = await getExpense();
      setExpenses(expensesFromLocalStorage);
    };
    fetchExpenses();
  }, []);

  /* This code filters the expenses array based on the selectedMonth and selectedYear variables. */
  const filteredData = expenses.filter((expense) => {
    if (selectedMonth && selectedYear) {
      return expense.date.startsWith(selectedYear + '-' + selectedMonth);
    } else if (selectedMonth) {
      const yearStart = 2020;
      const currentYear = new Date().getFullYear();
      for (let year = yearStart; year <= currentYear; year++) {
        if (expense.date.startsWith(`${year}-${selectedMonth}`)) {
          return true;
        }
      }
      return false;
    } else if (selectedYear) {
      return expense.date.startsWith(selectedYear);
    } else {
      return true;
    }
  });

  /* This code sets the sorting column and direction based on the current sortColumn state and
   the input columnName. */
  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnName);
      setSortDirection('asc');
    }
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  /* This code sorts the filteredData array by the sortColumn state and the sortDirection state. */
  const sortedData = filteredData.slice().sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    if (aValue === bValue) {
      return 0;
    }
    const sortMultiplier = sortDirection === 'asc' ? 1 : -1;
    return aValue > bValue ? sortMultiplier : -sortMultiplier;
  });

  /* This code sets the editingExpenseId state to the expenseId parameter when the handleClick function is called. */
  const handleClick = (expenseId) => {
    setEditingExpenseId(expenseId);
  };

  /* This code deletes an expense with the expenseId parameter using the deleteExpense function,
   and updates the expenses state with the resulting array of expenses. */
  const handleDelete = async (expenseId) => {
    const expenseAfterRemoval = await deleteExpense(expenseId);
    setExpenses(expenseAfterRemoval);
  };

  /* This code ensures that once clicking the cancel button you exit edit mode */
  const handleCancel = () => {
    setEditingExpenseId(null);
  };

  const handleClearFliter = () => {
    setSelectedMonth('');
    setSelectedYear('');
  };

  /* This code updates the selected month based on the user-selected option in the event target. */
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  /* This updates the selected year based on the user-selected option in the event target. */
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  /* The code is a function that updates an expense record with the new values entered in a form.
   It performs basic validation to make sure that none of the fields are empty and then sends a
    request to the server to update the expense. Finally, it updates the state of the expenses in
     the application and sets the editing expense ID to null. */
  const handleSave = async (expenseId) => {
    const expense = {
      expenseItem: document.getElementsByName('editName')[0].value,
      category: document.getElementsByName('editCategory')[0].value,
      description: document.getElementsByName('editDescription')[0].value,
      date: document.getElementsByName('editDate')[0].value,
      costItem: parseInt(document.getElementsByName('editCost')[0].value),
      id: expenseId,
    };
    for (let field of Object.values(expense)) {
      if (!field) {
        alert('error - you set an empty field');
        return;
      }
    }
    const updatedExpenses = await editExpense(expense);
    setExpenses(updatedExpenses);
    setEditingExpenseId(null);
  };

  let total = 0;

  /* This code counts the sum of all the current expenses shown to the user and holds the total */
  filteredData.forEach((expense) => {
    total += parseFloat(expense.costItem);
  });

  /* The table component displays a list of expenses and allows filtering by month and year.
   It includes a table with columns for expense item, category, description, date, cost, and
    actions. The expense items can be edited or deleted by clicking the respective buttons. The 
    component calculates and displays the total cost of all expenses. If there are no expenses to show,
     it displays a 'Nothing to show yet' message. */
  return (
    <div>
      {expenses.length === 0 ? (
        <Message> {emptyTableText} </Message>
      ) : (
        <>
          <FilterContainer>
            <Label>{filterMonthText}</Label>
            <Select value={selectedMonth} onChange={handleMonthChange}>
              {months.map((month) => (
                <SelectOption key={month.value} value={month.value}>
                  {month.label}
                </SelectOption>
              ))}
            </Select>
          </FilterContainer>
          <FilterContainer>
            <Label>{filterYearText}</Label>
            <Select value={selectedYear} onChange={handleYearChange}>
              {years.map((year) => (
                <SelectOption key={year.value} value={year.value}>
                  {year.label}
                </SelectOption>
              ))}
            </Select>
          </FilterContainer>
          <FilterContainer>
            <Label>{chooseCurrencyText}</Label>
            <Select value={currency} onChange={handleCurrencyChange}>
              {currencies.map((c) => (
                <SelectOption key={c.label} value={c.label}>
                  {c.value}
                </SelectOption>
              ))}
            </Select>
          </FilterContainer>
            <ButtonWrapper>
              <Label></Label>
            <ClearFiltersButton onClick={handleClearFliter}>Clear Filters</ClearFiltersButton>
            </ButtonWrapper>
          <StyledTable>
            <StyledThead>
              <StyledTr>
                {[
                  ['expenseItem', itemHeaderText],
                  ['category', categoryHeaderText],
                  ['description', descriptionHeaderText],
                  ['date', createdDateHeaderText],
                  ['costItem', costHeaderText],
                ].map(([sortKey, headerText]) => (
                  <StyledTh key={sortKey} onClick={() => handleSort(sortKey)}>
                    {headerText}
                    <SortIcon />
                  </StyledTh>
                ))}
                <StyledTh>Actions</StyledTh>
              </StyledTr>
            </StyledThead>
            <StyledTbody>
              {sortedData.map((expense) => (
                <StyledTr key={expense.expenseItem}>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <input
                        name='editName'
                        type='text'
                        defaultValue={expense.expenseItem}
                      />
                    ) : (
                      expense.expenseItem
                    )}
                  </StyledTd>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <Select
                        name='editCategory'
                        defaultValue={expense.category}
                      >
                        {categoriesOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    ) : (
                      expense.category
                    )}
                  </StyledTd>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <textarea
                        rows='2'
                        cols='20'
                        name='editDescription'
                        wrap='soft'
                        defaultValue={expense.description}
                      />
                    ) : (
                      expense.description
                    )}
                  </StyledTd>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <input
                        name='editDate'
                        type='date'
                        min='2020-01-01'
                        max={new Date().toISOString().split('T')[0]}
                        defaultValue={expense.date}
                      />
                    ) : (
                      expense.date
                    )}
                  </StyledTd>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <input
                        name='editCost'
                        type='number'
                        min='0'
                        defaultValue={expense.costItem}
                        required
                      />
                    ) : (
                      `${expense.costItem} ${currency}`
                    )}
                  </StyledTd>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <>
                        <Button onClick={() => handleSave(expense.id)}>
                          {saveButtonText}
                        </Button>
                        <Button onClick={handleCancel}>
                          {cancelButtonText}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button onClick={() => handleClick(expense.id)}>
                          {editButtonText}
                        </Button>
                        <Button onClick={() => handleDelete(expense.id)}>
                          {deleteButtonText}
                        </Button>
                      </>
                    )}
                  </StyledTd>
                </StyledTr>
              ))}
            </StyledTbody>
            <StyledTfoot>
              <StyledTr>
                <StyledTd colspan='8'>{totalText}</StyledTd>
                <StyledTd>{`${total} ${currency}`}</StyledTd>
                <StyledTd />
                <StyledTd />
                <StyledTd />
                <StyledTd />
              </StyledTr>
            </StyledTfoot>
          </StyledTable>
        </>
      )}
    </div>
  );
};

export default Table;
