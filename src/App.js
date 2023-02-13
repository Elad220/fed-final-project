/* Written by:
Elad Asaf - 208434597
Lidar Baruch - 207233545
Guy Ofir - 318597259
*/
import './App.css';
import Page from './componemts/Page/page';
import { SnackbarProvider } from 'notistack';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Form from './componemts/Form/form';
import Table from './componemts/Table/table';
import ChartComponent from './componemts/Chart/chart';
import Navigation from './componemts/Navigation/navigation';
import Footer from './componemts/Footer/footer';
import { chartRoute, expensesRoute, expensesTitleMessage, formRoute, formTitleMessage, chartTitleMessage } from './consts';

/* This is the main app component */
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <SnackbarProvider maxSnack={3}>
        <div>
          <Navigation />
          <Routes>
            <Route
              exact
              path={formRoute}
              element={
                <Page title={formTitleMessage} component={<Form />} />
              }
            />
            <Route
              path={expensesRoute}
              element={
                <Page
                  title={expensesTitleMessage}
                  component={<Table />}
                />
              }
            />
            <Route
              path={chartRoute}
              element={
                <Page
                  title={chartTitleMessage}
                  component={<ChartComponent />}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </SnackbarProvider>
    </Router>
  );
};
export default App;
