import "./App.css";
import { AddItemPage } from "./componemts/AddItemPage/AddItemPage";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    // <div className="App">
    // <header className="App-header">
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <AddItemPage />
    </SnackbarProvider>
    // </header>
    // </div>
  );
}

export default App;
