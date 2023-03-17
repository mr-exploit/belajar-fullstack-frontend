import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./Pages/dashboard";
import Datausers from "./Pages/Datausers";
import Adduser from "./Pages/Adduser";
import Edituser from "./Pages/Edituser";
import Books from "./Pages/Books";
import Addbooks from "./Pages/Addbooks";
import Editbooks from "./Pages/Editbooks";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/users" element={<Datausers/>} />
          <Route path="/users/add" element={<Adduser/>} />
          <Route path="/users/edit/:id" element={<Edituser/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/books/add" element={<Addbooks/>} />
          <Route path="/books/edit/:id" element={<Editbooks/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
