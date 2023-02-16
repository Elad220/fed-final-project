/* Written by:
Elad Asaf - 208434597
Lidar Baruch - 207233545
Guy Ofir - 318597259
*/
import React, { useState, useEffect } from 'react';
import { getExpense } from '../../localStorageUtils';
import { categoriesOptions, emptyTableText } from '../../consts';
import { Chart } from 'react-google-charts';
import countByCategory from './utils';
import { Message } from '../Table/styled';
import { ChartContainer } from './styled';

const ChartComponent = () => {
  /* two state variables, expenseData and chartData, and sets their initial values to an empty array
   using the useState hook. */
  const [expenseData, setExpenseData] = useState([]);
  const [chartData, setChartData] = useState([]);

  /* this useEffect defines an asynchronous function fetchData, which fetches the expense data by 
  calling getExpense,and sets the state variable expenseData to the result using the
   setExpenseData function. */
  useEffect(() => {
    const fetchData = async () => {
      const result = await getExpense();
      setExpenseData(result);
    };
    fetchData();
  }, []);

  /* this useEffect is called whenever expenseData changes. Inside, it defines a function 
  calculateChartData that calculates a pie chart data by counting the number of expenses
   for each category in expenseData. It uses the categoriesOptions array to get the list
    of categories and countByCategory function to count the number of expenses for each category. */
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
      return [['Category', 'Total'], ...chartData];
    };
    /* The resulting data is transformed into a format suitable for rendering a pie chart
     using chartData state variable. This format is an array of arrays, where the first array
      is the header row with the names of the columns, and subsequent arrays represent the data.
       The setChartData function is used to update the chartData state variable with the
      calculated data. */
    setChartData(calculateChartData());
  }, [expenseData]);

  console.log(chartData.length);
  return (
    /* This code creates the pie chart component using the react-google-charts component and passes
    the options arguments to it. If there aren't any expenses, "nothing to show yet!" is presented. */
    <ChartContainer>
      {expenseData.length === 0 ? (
        <Message> {emptyTableText} </Message>
      ) : (
        <>
          <Chart
            chartType='PieChart'
            width='33rem'
            height='25rem'
            data={chartData}
            options={{
              title: 'Category Totals',
              is3D: true,
              backgroundColor: 'transparent',

            }}
          />
        </>
      )}
    </ChartContainer>
  );
};

export default ChartComponent;
