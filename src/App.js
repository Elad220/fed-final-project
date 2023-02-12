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

/* This is the main app component */
const App = () => {
  return (
    <Router>
      <SnackbarProvider maxSnack={3}>
        <div>
          <Navigation />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <Page title={'Welcome to our app!'} components={[<Form />]} />
              }
            />
            <Route
              path='/expenses'
              element={
                <Page
                  title={'Your expenses:'}
                  components={[<ChartComponent />, <Table />]}
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
