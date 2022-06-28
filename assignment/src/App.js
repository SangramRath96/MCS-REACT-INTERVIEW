import logo from './logo.svg';
import './App.css';
import FriendDetails from "./components/FriendDetails"
import { useNavigate, BrowserRouter as Router,Route,Link,Routes, Navigate } from "react-router-dom";
import Friendlist from "./components/Friendlist";
function App() {
  return (
    <div className="App">
    <Router>
      <Routes >
        <Route path="/list" exact element={<Friendlist/>}></Route>
        <Route path="/details/:id" exact element={<FriendDetails/>}></Route>
        <Route path="*"  element={<Navigate to="/list" replace/> }></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
