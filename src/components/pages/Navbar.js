import { Outlet, Link } from "react-router-dom";
import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import './navbar.css'
const Navbar = ({darkmode, activeMode}) => {
   const [drop, setDrop] = useState(false);
   function handelClick() {
    setDrop((prevMode) => !prevMode);
  }
  return (
    <>
      <nav className={darkmode ? "flex dark-navbar" : "flex navbar"}>
          <AiOutlineMenu className="logo"/>
        <ul className="flex nav-list">
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link className="link" to="/Ajuda">Ajuda</Link>
          </li>
          <li className="config">
            <button type="button" className="button" onClick={handelClick}>
        configuration
           </button>
           {drop && (
          <div class="dropdown">
          <button className="btn">Logout</button>
          </div>
          )}
          </li>
          <li>
            <select>
             <option value="pt-br">pt-br</option>
             <option value="en-us">en-us</option>
             <option value="en-us">es-es</option>
            </select>
          </li>
          <li className="flex">
            <small>Dark</small>
            <div className="slider" onClick={activeMode}>
              <div className="slider--circle"></div>
            </div>
            <small>Light</small>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;