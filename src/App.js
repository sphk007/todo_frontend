import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import SignUp from "./Signup";
import Navbar from "./Navbar";
import  User  from "./User";
import TodoList from "./Todolist";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />} ></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path="/todo" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
