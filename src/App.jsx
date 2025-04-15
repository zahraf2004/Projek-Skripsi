import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginFlow/Login";
import Homepage from "./pages/homepage/Homepage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
