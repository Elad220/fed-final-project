/* Written by:
Elad Asaf - 208434597
Lidar Baruch - 207233545
Guy Ofir - 318597259
*/
import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height: 100%;
  background-color: #c0c0c0;
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const FormInput = styled.input`
  padding: 15px 20px;
  margin: 20px 10px;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background-color: white;
  box-shadow: 0 0 10px gray;
  width: 400px;
`;

export const FormSelect = styled.select`
  padding: 15px 20px;
  margin: 20px 10px;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background-color: white;
  box-shadow: 0 0 10px gray;
  width: 440px;
`;

export const FormTextArea = styled.textarea`
  padding: 15px 20px;
  margin: 20px 10px;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background-color: white;
  box-shadow: 0 0 10px gray;
  width: 400px;
  height: 50px;
`;

export const FormButton = styled.button`
  padding: 15px 40px;
  margin: 20px 0px 20px;
  font-size: 18px;
  border-radius: 10px;
  background-color: #00a36c;
  color: white;
  width: 40%;
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
  margin: 10px 10px;
  color: black;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
