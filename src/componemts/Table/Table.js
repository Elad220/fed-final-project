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
  TfootBg
} from "./styled";
import {
  getExpense,
  editExpense,
  deleteExpense,
} from "../../localStorageUtils";
import { categoriesOptions, years, months } from "../../consts";

function Table() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpenseId, setEditingExpenseId] = useState(null);

  useEffect(() => {
    setExpenses(getExpense());
  }, []);
  const handleClick = (expenseId) => {
    setEditingExpenseId(expenseId);
  };

  const handleDelete = (expenseId) => {
    setExpenses(deleteExpense(expenseId));
  };

  const handleCancel = () => {
    setEditingExpenseId(null);
  };
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
    const filteredData = expenses.filter((expense) => {
        if (selectedMonth && selectedYear) {
            return expense.date.startsWith(selectedYear + '-' + selectedMonth);
        } else if (selectedMonth) {
            return expense.date.startsWith(`${String(new Date().getFullYear())}-` + selectedMonth);
        } else if (selectedYear) {
            return expense.date.startsWith(selectedYear);
        } else {
            return true;
        }
        });

        const handleMonthChange = (event) => {
            setSelectedMonth(event.target.value);
          };

          const handleYearChange = (event) => {
            setSelectedYear(event.target.value);
          };

  const handleSave = (event, expenseId) => {
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
    setExpenses(editExpense(expense));
    setEditingExpenseId(null);
  };
  let total = 0;

  filteredData.forEach((expense) => {
    total += parseFloat(expense.costItem);
  });

  return (
    <div>
    <FilterContainer>
      <label>Filter by Month:</label>
      <Select value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month) => (
          <option key={month.value} value={month.value}>{month.label}</option>
        ))}
      </Select>
    </FilterContainer>
    <FilterContainer>
      <label>Filter by Year:</label>
      <Select value={selectedYear} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year.value} value={year.value}>{year.label}</option>
        ))}
      </Select>
    </FilterContainer>
    <StyledTable>
      <StyledThead>
        <StyledTr>
          <StyledTh>Item</StyledTh>
          <StyledTh>Category</StyledTh>
          <StyledTh>Description</StyledTh>
          <StyledTh>Created Date</StyledTh>
          <StyledTh>Cost</StyledTh>
          <StyledTh>Actions</StyledTh>
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {filteredData.map((expense) => (
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
                  { categoriesOptions.map((option) => (
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
                  rows="2" cols="20"
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
                `${String(expense.costItem)}$`
              )}
            </StyledTd>
            <StyledTd>
              {editingExpenseId === expense.id ? (
                <>
                  <Button onClick={(event) => handleSave(event, expense.id)}>
                    Save
                  </Button>
                  <Button onClick={handleCancel}>Cancel</Button>
                </>
              ) : (
                <>
                  <Button onClick={() => handleClick(expense.id)}>Edit</Button>
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
            <StyledTd>{total}</StyledTd>
            <StyledTd />
            <StyledTd />
            <StyledTd />
            <StyledTd />
        </StyledTr>
        </StyledTfoot>
    </StyledTable>
    </div>
  );
}

export default Table;
