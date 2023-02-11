import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 120vh;
  border-collapse: collapse;
  text-align: left;
  background-color: #C0C0C0;
  table-layout: fixed; /* add this line */
`;

export const StyledThead = styled.thead`
  background-color: #333;
  color: white;
`;


export const StyledTh = styled.th`
  padding: 12px;
`;

export const StyledTbody = styled.tbody`
  background-color: #f2f2f2;
`;

export const StyledTr = styled.tr`
    width: 100%;
    &:nth-child(even) {
        background-color: #dddddd;
    }
`;

export const StyledTd = styled.td`
  padding: 12px;
  width: 100%;
  word-wrap: break-word;
  box-sizing: border-box;
  position: relative; /* position relative to allow absolute positioning of the input */
  input, select, textarea {
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
      content: "";
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
  color: #333;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
    color: #fff;
  }
`;