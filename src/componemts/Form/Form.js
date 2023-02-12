import React, { useState } from "react";
import {
  category,
  expenseItem,
  description,
  categoriesOptions,
  pickDate,
  costItem,
} from "../../consts.js";
import {
  FormButton,
  FormTextArea,
  FormSelect,
  FormInput,
  FormContainer,
  FormLabel,
  InputWrapper,
} from "./styled";
import { addExpense } from "../../localStorageUtils";
import { useSnackbar } from "notistack";

const Form = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showSuccess = (message) => {
    enqueueSnackbar(message, {
      anchorOrigin: { vertical: "top", horizontal: "right" },
      variant: "success",
    });
  };

  const showError = (message) => {
    enqueueSnackbar(message, {
      anchorOrigin: { vertical: "top", horizontal: "right" },
      variant: "error",
    });
  };

  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    expenseItem: "",
    category: "",
    description: "",
    date: "",
    costItem: 0,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = Date.now().toString();
    const expense = {
      expenseItem: event.target.elements.expenseItem.value,
      category: event.target.elements.category.value,
      description: event.target.elements.description.value,
      date: event.target.elements.date.value,
      costItem: event.target.elements.costItem.value,
      id: id,
    };
    try {
      await addExpense(expense);
      const message = "Successfully added item!";
      showSuccess(message);
    } catch (error) {
      const message = `Item not added due to error: ${error}`;
      showError(message);
    }
    setFormData({
      expenseItem: "",
      category: "",
      description: "",
      date: Date.now(),
      costItem: 0,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <FormLabel>
          {expenseItem}
          <InputWrapper>
            <FormInput
              type="text"
              name="expenseItem"
              value={formData.expenseItem}
              onChange={handleChange}
              required
            />
          </InputWrapper>
        </FormLabel>
      </div>
      <div>
        <FormLabel>
          {costItem}
          <InputWrapper>
            <FormInput
              type="number"
              min="0"
              name="costItem"
              value={formData.costItem}
              onChange={handleChange}
              required
            />
          </InputWrapper>
        </FormLabel>
      </div>
      <div>
        <FormLabel>
          {category}
          <InputWrapper>
            <FormSelect
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected hidden>
                Choose a category
              </option>
              {categoriesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </FormSelect>
          </InputWrapper>
        </FormLabel>
      </div>
      <div>
        <FormLabel>
          {description}
          <InputWrapper>
            <FormTextArea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </InputWrapper>
        </FormLabel>
      </div>
      <div>
        <FormLabel>
          {pickDate}
          <InputWrapper>
            <FormInput
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </InputWrapper>
        </FormLabel>
      </div>
      <FormButton type="submit">Submit</FormButton>
    </FormContainer>
  );
};

export default Form;
