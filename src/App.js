
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'
import Home from "./components/pages/Home";
import Ajuda from "./components/pages/Ajuda";
import Nopage from "./components/pages/Nopage";
import Navbar from "./components/pages/Navbar";
import Login from "./components/pages/Login";


function App() {

  const [darkmode, setDarkMode] = useState(true);
  const [token, setToken] = useState(true);

  function activeMode(){
    setDarkMode(prevMode => !prevMode)
  }
  if(token){
    return <Login setToken={setToken}/>
  } else{


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar darkmode={darkmode}
        activeMode={activeMode}/>}>
          <Route index element={<Home  darkmode={darkmode}/>} />
          <Route path="ajuda" element={<Ajuda />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )};
}

export default App;
