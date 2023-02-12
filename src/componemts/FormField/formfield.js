import React from 'react';
import { FormLabel, FormInput, InputContainer, InputWrapper, FormTextArea, FormSelect } from '../Form/styled';

const FormField = ({ label, name, value, element, type, options, rows, cols, min, max, onChange, required }) => {
    const inputProps = {
      name,
      value,
      onChange,
      required
    };
  
    if (min !== null) {
      inputProps.min = min;
    }
  
    if (max !== null) {
      inputProps.max = max;
    }
  
    let inputElement = null;
  
    if (element === 'textarea') {
      inputElement = (
        <FormTextArea {...inputProps} rows={rows} cols={cols} />
      );
    } else if (element === 'select') {
      inputElement = (
        <FormSelect {...inputProps}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </FormSelect>
      );
    } else {
      inputElement = (
        <FormInput type={type} {...inputProps} />
      );
    }
  
    return (
      <InputWrapper>
        <FormLabel>{label}</FormLabel>
        <InputContainer>{inputElement}</InputContainer>
      </InputWrapper>
    );
  };
  

export default FormField;
