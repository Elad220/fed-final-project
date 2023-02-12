/* Written by:
Elad Asaf - 208434597
Lidar Baruch - 207233545
Guy Ofir - 318597259
*/
const countByCategory = (expenses, category) => {
  let count = 0;
  expenses.forEach((expense) => {
    if (expense.category === category) {
      count++;
    }
  });
  return count;
};
export default countByCategory;
