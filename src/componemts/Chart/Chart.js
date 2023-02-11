import React, { useState, useEffect } from "react";
import { getExpense } from "../../localStorageUtils";
// import { StyledPieChart } from "./styled";
import { categoriesOptions } from "../../consts";
import { Chart } from "react-google-charts";
// const PieColors = [
//   "#0088FE",
//   "#00C49F",
//   "#FFBB28",
//   "#FF8042",
//   "#FF5733",
//   "#808080",
//   "#00FF00",
//   "#FFA07A",
//   "#228B22",
// ];

const countByCategory = (expenses, category) => {
  let count = 0;
  expenses.forEach((expense) => {
    if (expense.category === category) {
      count++;
    }
  });
  return count;
};
const ChartComponent = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getExpense();
      setExpenseData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const calculateChartData = () => {
      const PieData = [];
      categoriesOptions.forEach((category) => {
        PieData.push({
          name: category,
          value: countByCategory(expenseData, category),
        });
      });
      const chartData = PieData.map(({ name, value }) => [name, value]);
      return [["Category", "Total"], ...chartData];
    };

    setChartData(calculateChartData());
  }, [expenseData]);

  return (
    <Chart
      chartType="PieChart"
      width="100vh"
      height="200px"
      data={chartData}
      options={{
        title: "Category Totals",
        is3D: true,
        backgroundColor: "transparent",
      }}
    />
  );
};

export default ChartComponent;
