
import './App.css';
import {Routes , Route} from "react-router-dom";
import Home from "./compement/home/home"
import Login from "./compement/Login/Login"
import Register from "./compement/Register/Register"
function App() {
  return (
    <div className="App">
     <Routes>
       <Route  path="/"  element = { <Home />}     />
       <Route  path="/login"  element = { <Login/>}     />
       <Route  path="/Register"  element = { <Register/>}     />
  
     </Routes>
    </div>
  );
}

export default App;
