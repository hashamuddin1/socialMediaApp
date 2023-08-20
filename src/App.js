import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<UserLogin />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
