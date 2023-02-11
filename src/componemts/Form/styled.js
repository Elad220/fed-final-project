import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #c0c0c0;
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const FormInput = styled.input`
  padding: 15px 20px;
  margin: 20px 0;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background-color: white;
  box-shadow: 0 0 10px gray;
  width: 400px;
`;

export const FormSelect = styled.select`
  padding: 15px 20px;
  margin: 20px 0;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background-color: white;
  box-shadow: 0 0 10px gray;
  width: 430px;
`;

export const FormTextArea = styled.textarea`
  padding: 15px 20px;
  margin: 20px 0;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background-color: white;
  box-shadow: 0 0 10px gray;
  width: 390px;
  height: 50px;
`;

export const FormButton = styled.button`
  padding: 15px 40px;
  margin: 20px 0;
  font-size: 18px;
  border-radius: 10px;
  background-color: #00a36c;
  color: white;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #2aaa8a;
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
