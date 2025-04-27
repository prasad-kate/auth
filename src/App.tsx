import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="*" element={<>Page not found!</>} />
      <Route path="/" element={<>Home Page</>} />
      <Route path="/login" element={<>Login Page</>} />
    </Routes>
  );
}

export default App;
