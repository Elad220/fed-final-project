import React from "react";
import { Pie, Cell, Legend, Tooltip } from "recharts";
import { getExpense } from "../../localStorageUtils";
import { StyledPieChart } from "./styled";
import { categoriesOptions } from "../../consts";
import { Chart } from 'react-google-charts'
const PieColors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF5733",
  "#808080",
  "#00FF00",
  "#FFA07A",
  "#228B22",
];

const countByCategory = (expenses, category) => {
  let count = 0;
  expenses.forEach((expense) => {
    if (expense.category === category) {
      count++;
    }
  });
  return count;
};
const expenses = getExpense();
const PieData = [];
categoriesOptions.forEach((category) => {
  PieData.push({ name: category, value: countByCategory(expenses, category) });
});
console.log(PieData.values);
const OurChart = () => {
  return (
    // <StyledPieChart>
    //   <Pie
    //     data={PieData}
    //     cx={250}
    //     cy={250}
    //     outerRadius={200}
    //     fill="#8884d8"
    //     dataKey="value"
    //   >
    //     {PieData.map((entry, index) => (
    //       <Cell
    //         key={`cell-${index}`}
    //         fill={PieColors[index % PieColors.length]}
    //       />
    //     ))}
    //   </Pie>
    //   <Tooltip />
    //   <Legend />
    // </StyledPieChart>
    <Chart chartType="PieChart"
                    data={PieData}
                    options={categoriesOptions}
                    width="110%"
                    height="340px"/>
  );
};

export default OurChart;
