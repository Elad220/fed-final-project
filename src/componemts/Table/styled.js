/* Written by:
Elad Asaf - 208434597
Lidar Baruch - 207233545
Guy Ofir - 318597259
*/
import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 120vh;
  margin-bottom: 30px;
  border-collapse: collapse;
  text-align: left;
  table-layout: fixed;
  th {
    background-color: #333;
    color: white;
  }

  tbody tr:nth-child(even) {
    background-color: #dddddd;
  }

  tbody tr:nth-child(odd) {
    background-color: #b9b7bd;
  }
`;

export const StyledThead = styled.thead`
  color: white;
`;

export const StyledTh = styled.th`
  cursor: pointer;
  padding: 12px;
`;

export const StyledTbody = styled.tbody`
  background-color: #f2f2f2;
`;

export const StyledTr = styled.tr`
  width: 100%;
`;

export const StyledTd = styled.td`
  padding: 12px;
  width: 100%;
  word-wrap: break-word;
  box-sizing: border-box;
  position: relative; /* position relative to allow absolute positioning of the input */
  input,
  select,
  textarea {
    width: 100%; /* set the width to 100% so it fills the entire cell */
    box-sizing: border-box; /* include padding and borders in the width */
    position: absolute; /* position the input absolutely within the cell */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: none;
    padding: 6px; /* add some padding to match the cell padding */
    font-size: inherit; /* inherit the font-size from the parent element */
    font-family: inherit;
  }
`;
export const StyledTfoot = styled.tfoot`
  background-color: #333;
  color: white;
  ${StyledTd} {
    position: relative;
    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      background-color: #333;
      z-index: -1;
    }
  }
`;

export const Button = styled.button`
  padding: 12px 6px;
  margin-right: 6px;
  width: 60px; // set a fixed width of 80 pixels
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  background-color: #fff;
  width: 12%;
  color: #333;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
    color: #fff;
  }
`;

export const Message = styled.p`
  font-size: 24px;
  color: #555;
  text-align: center;
  margin-top: 40px;
  font-weight: bold;
`;
