import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Rotas/Login";
import Cadastro from "./Rotas/Cadastro";
import Habitos from "./Rotas/Habitos";
import Hoje from "./Rotas/Hoje";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Login />}></Route>
      <Route path={"/Cadastro"} element={<Cadastro />}></Route>
      <Route path={"/Habitos"} element={<Habitos />}></Route>
      <Route path={"/Hoje"} element={<Hoje />}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
