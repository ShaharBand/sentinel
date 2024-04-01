import "./App.css";
import { StyledEngineProvider } from "@mui/material";
import { Router } from "./components/Router/Router";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Router />
    </StyledEngineProvider>
  );
}

export default App;
