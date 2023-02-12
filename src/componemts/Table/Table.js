import React, { useEffect, useState } from "react";
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
} from "./styled";
import {
  getExpense,
  editExpense,
  deleteExpense,
} from "../../localStorageUtils";
import { categoriesOptions, years, months } from "../../consts";
import SortIcon from "../SortIcon/SortIcon";

const Table = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpenseId, setEditingExpenseId] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const filteredData = expenses.filter((expense) => {
    if (selectedMonth && selectedYear) {
      return expense.date.startsWith(selectedYear + "-" + selectedMonth);
    } else if (selectedMonth) {
      const yearStart = 2020; // change this to the earliest year of interest
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

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnName);
      setSortDirection("asc");
    }
  };

  const sortedData = filteredData.slice().sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    if (aValue === bValue) {
      return 0;
    }
    const sortMultiplier = sortDirection === "asc" ? 1 : -1;
    return aValue > bValue ? sortMultiplier : -sortMultiplier;
  });

  useEffect(() => {
    const fetchExpenses = async () => {
      const expensesFromLocalStorage = await getExpense();
      setExpenses(expensesFromLocalStorage);
    };
    fetchExpenses();
  }, []);
  const handleClick = (expenseId) => {
    setEditingExpenseId(expenseId);
  };

  const handleDelete = async (expenseId) => {
    const expenseAfterRemoval = await deleteExpense(expenseId);
    setExpenses(expenseAfterRemoval);
  };

  const handleCancel = () => {
    setEditingExpenseId(null);
  };
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSave = async (expenseId) => {
    const expense = {
      expenseItem: document.getElementsByName("editName")[0].value,
      category: document.getElementsByName("editCategory")[0].value,
      description: document.getElementsByName("editDescription")[0].value,
      date: document.getElementsByName("editDate")[0].value,
      costItem: document.getElementsByName("editCost")[0].value,
      id: expenseId,
    };
    for (let field of Object.values(expense)) {
      if (!field) {
        alert("error - you set an empty field");
        return;
      }
    }
    const updatedExpenses = await editExpense(expense);
    setExpenses(updatedExpenses);
    setEditingExpenseId(null);
  };
  let total = 0;

  filteredData.forEach((expense) => {
    total += parseFloat(expense.costItem);
  });

  return (
    <div>
      {expenses.length === 0 ? (
        <Message> Nothing to show yet!</Message>
      ) : (
        <>
          <FilterContainer>
            <label>Filter by Month:</label>
            <Select value={selectedMonth} onChange={handleMonthChange}>
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </Select>
          </FilterContainer>
          <FilterContainer>
            <label>Filter by Year:</label>
            <Select value={selectedYear} onChange={handleYearChange}>
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </Select>
          </FilterContainer>
          <StyledTable>
            <StyledThead>
              <StyledTr>
                <StyledTh onClick={() => handleSort("expenseItem")}>
                  Item
                  <SortIcon />
                </StyledTh>
                <StyledTh onClick={() => handleSort("category")}>
                  Category
                  <SortIcon />
                </StyledTh>
                <StyledTh onClick={() => handleSort("description")}>
                  Description
                  <SortIcon />
                </StyledTh>
                <StyledTh onClick={() => handleSort("date")}>
                  Created Date
                  <SortIcon />
                </StyledTh>
                <StyledTh onClick={() => handleSort("costItem")}>
                  Cost
                  <SortIcon />
                </StyledTh>
                <StyledTh>Actions</StyledTh>
              </StyledTr>
            </StyledThead>
            <StyledTbody>
              {sortedData.map((expense) => (
                <StyledTr key={expense.expenseItem}>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <input
                        name="editName"
                        type="text"
                        defaultValue={expense.expenseItem}
                      />
                    ) : (
                      expense.expenseItem
                    )}
                  </StyledTd>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <select
                        name="editCategory"
                        defaultValue={expense.category}
                      >
                        {categoriesOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                        }
                      </select>
                    ) : (
                      expense.category
                    )}
                  </StyledTd>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <textarea
                        rows="2"
                        cols="20"
                        name="editDescription"
                        wrap="soft"
                        defaultValue={expense.description}
                      />
                    ) : (
                      expense.description
                    )}
                  </StyledTd>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <input
                        name="editDate"
                        type="date"
                        defaultValue={expense.date}
                      />
                    ) : (
                      expense.date
                    )}
                  </StyledTd>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <input
                        name="editCost"
                        type="number"
                        min="0"
                        defaultValue={expense.costItem}
                        required
                      />
                    ) : (
                      `${expense.costItem}$`
                    )}
                  </StyledTd>
                  <StyledTd>
                    {editingExpenseId === expense.id ? (
                      <>
                        <Button onClick={() => handleSave(expense.id)}>
                          Save
                        </Button>
                        <Button onClick={handleCancel}>Cancel</Button>
                      </>
                    ) : (
                      <>
                        <Button onClick={() => handleClick(expense.id)}>
                          Edit
                        </Button>
                        <Button onClick={() => handleDelete(expense.id)}>
                          Delete
                        </Button>
                      </>
                    )}
                  </StyledTd>
                </StyledTr>
              ))}
            </StyledTbody>
            <StyledTfoot>
              <StyledTr>
                <StyledTd colspan="8">Total</StyledTd>
                <StyledTd>{`${total}$`}</StyledTd>
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
