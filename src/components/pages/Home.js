import './home.css'
import { useState } from 'react'
// import { IoCaretBackOutline } from "react-icons/io5";
import Bord from './bord/Bord'
import Search from './bord/Search'

const Home = ({darkmode}) => {
  const [login, setLogin] = useState(true)
  return(
    <main className= {darkmode ? "container" : "dark"}>
    <Bord login={login}/>
    <Search  darkmode={darkmode}/> 
    
    </main>
  ) 
};

export default Home;