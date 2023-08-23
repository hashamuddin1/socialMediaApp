import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./components/UserLogin";
import UserSignUp from "./components/UserSignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<UserLogin />} />
          <Route exact path="/signUp" element={<UserSignUp />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
