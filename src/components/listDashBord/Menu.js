import './Menu.css'
import SubMenu from './SubMenu'
export default function Menu(){
         
    return(
        <>
  
        <div className="list-bord">
            <p>favorite</p>
            <p className="number">30</p>
        </div>
        <SubMenu />
       
        </>
    )
}