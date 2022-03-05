
import './Login.css'
import { useState } from 'react'
export default function Login({setToken}){
      const [formUser, setFormUser] = useState({
          Usuario: "",
          Senha: ""
      })
    
    function handelChange(e){
        setFormUser(prev =>{
          return {
              ...prev,
              [e.target.name] : e.target.value,
              
          }
      })
    }
    console.log(formUser)
    function handelSubmit(e){
         e.preventDefault();
         setToken(false)
    }
    return(
        <>
        <div className='form-container'>
        <div className='login-wrapper'>
        <h1>Porfavor faça o seu login</h1>
        <form className="form" onSubmit={handelSubmit}>
            <label> Usuário </label>
            <input type="text" placeholder="Usuário"  name="Usuario" value={formUser.Usuario} 
            onChange={handelChange}/>
           
            <label> Senha</label>
            <input type="password" placeholder="Senha"  name="Senha" value={formUser.Senha} 
             onChange={handelChange}/>
            
            <button type='submit'>Login</button>
        </form>
        </div>
        </div>
        </>
    )
}