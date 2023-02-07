import React, { useState } from "react";
import {category, expenseItem, description, categoriesOptions, pickDate, costItem} from "../../consts.js"
import {FormButton, FormTextArea, FormSelect, FormInput, FormContainer, FormLabel} from './styled'
import {addExpense} from '../../localStorageUtils'

const Form = () => {
  const [formData, setFormData] = useState({
    expenseItem: "",
    category: "",
    description: "",
    date: "",
    costItem: 0
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expense = {
      item: event.target.elements.expenseItem.value,
      category: event.target.elements.category.value,
      description: event.target.elements.description.value,
      createdDate: event.target.elements.date.value,
      costItem: event.target.elements.costItem.value,
    };
    try{
      addExpense(expense);
      console.log("success")
      alert("Successfully added item!")
    }
    catch (error) {
    alert(`Error adding expense: ${error}`);
  }
    setFormData({expenseItem: "",
    category: "",
    description: "",
    date: Date.now()})
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <FormLabel>
        {expenseItem}
          <FormInput
            type="text"
            name="expenseItem"
            value={formData.expenseItem}
            onChange={handleChange}
            required
          />
        </FormLabel>
      </div>
      <div>
        <FormLabel>
        {costItem}
          <FormInput
            type="number"
            name="costItem"
            value={formData.costItem}
            onChange={handleChange}
            required
          />
        </FormLabel>
      </div>
      <div>
        <FormLabel>
          {category}
          <FormSelect
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected hidden>Choose a category</option>
            {categoriesOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
          </FormSelect>
        </FormLabel>
      </div>
      <div>
        <FormLabel>
          {description}
          <FormTextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormLabel>
      </div>
      <div>
      <FormLabel>
      {pickDate}
        <FormInput
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
      </FormLabel>
      </div>
      <FormButton type="submit">Submit</FormButton>
    </FormContainer>
  );
}

export default Form;
