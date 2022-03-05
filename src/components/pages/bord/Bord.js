import { IoCaretBackOutline } from "react-icons/io5";


import Menu from "../../listDashBord/Menu";
export default function Bord({login}){
    
    return(
        <div className='User-dashbord'>
          <div className="user-profile">
            <img className="user-image"src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="dogimage"/>
            <div className={login ? "green": "login-signal"}></div>
            <div className='user-config flex'>
            <p>Novo</p>
            <IoCaretBackOutline />
            </div>
          </div>
           <Menu />
          </div>
    )
}