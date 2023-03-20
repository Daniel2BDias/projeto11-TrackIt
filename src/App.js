import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Rotas/Login";
import Cadastro from "./Rotas/Cadastro";
import Habitos from "./Rotas/Habitos";
import Hoje from "./Rotas/Hoje";
import Historico from "./Rotas/Historico";
import UserContext from "./components/userContext";

function App() {

  const [userInfo, setUserInfo] = useState({token: "", image: "", habits: []});

  console.log(userInfo);
  
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
        <Route path={"/cadastro"} element={<Cadastro />}></Route>
        <Route path={"/habitos"} element={<Habitos />}></Route>
        <Route path={"/hoje"} element={<Hoje />}></Route>
        <Route path={"/historico"} element={<Historico />}></Route>
      </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;
