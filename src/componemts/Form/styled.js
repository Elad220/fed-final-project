import styled from "styled-components";


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #C0C0C0;
`;

export const FormInput = styled.input`
  padding: 15px 20px;
  margin: 20px 0;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  width: 100%;
  max-width: 500px;
  background-color: white;
  box-shadow: 0 0 10px gray;
`;

export const FormSelect = styled.select`
  padding: 15px 20px;
  margin: 20px 0;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  width: 100%;
  max-width: 500px;
  background-color: white;
  box-shadow: 0 0 10px gray;
`;

export const FormTextArea = styled.textarea`
  padding: 15px 20px;
  margin: 20px 0;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  width: 100%;
  max-width: 500px;
  height: 200px;
  background-color: white;
  box-shadow: 0 0 10px gray;
`;

export const FormButton = styled.button`
  padding: 15px 40px;
  margin: 20px 0;
  font-size: 18px;
  border-radius: 10px;
  background-color: #00A36C;
  color: white;
  width: 100%;
  max-width: 500px;
  cursor: pointer;
  &:hover {
    background-color: #2AAA8A;
  }
  &:focus {
    outline: none;
    background-color: #478778;
  }
  `;

  export const FormLabel = styled.label`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;
