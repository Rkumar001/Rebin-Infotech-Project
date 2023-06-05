import './App.css';
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListUser from './components/ListUser/ListUser';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/list-user" element={<ListUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
