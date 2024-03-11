import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
 
    <Routes>
       <Route path="/register"  /> 
    </Routes>
    
  );
}
export default App;
