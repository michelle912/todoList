import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Done from "./routes/done";
import Undone from "./routes/undone";


render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="done" element={<Done />} />
      <Route path="undone" element={<Undone />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);