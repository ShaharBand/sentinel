import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./fonts.css";
import "./App.css";

import NotFound from "./views/NotFound";
import DevicesPage from "./views/DevicesPage/DevicesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DevicesPage />} />
        <Route path="/devices" element={<DevicesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
