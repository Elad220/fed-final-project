import "./App.css";
import { Page } from "./componemts/Page/Page";
import { SnackbarProvider } from "notistack";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Form from "./componemts/Form/Form";
import Table from "./componemts/Table/Table";
import ChartComponent from "./componemts/Chart/Chart";
import Navigation from "./componemts/Navigation/Navigation";

function App() {
  return (
    <Router>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <div>
         <Navigation/>
        <Routes>
          <Route exact path="/" element={<Page title={"Welcome to our app!"} components={[<Form />]} />} />
          <Route path="/expenses" element={<Page title={"Your expenses:"} components={[<ChartComponent />, <Table />]} />} />
          </Routes>
        </div>
      </SnackbarProvider>
    </Router>
  );
}
export default App;

