import LoginPanel from "./components/Login/Login"
import Dealers from './components/Dealers/Dealers';
import Register from "./components/Register/Register"; 
import { Routes, Route } from "react-router-dom";
import PostReview from "./components/Dealers/PostReview"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
    </Routes>

    
 
  
    
  );
}
export default App;
