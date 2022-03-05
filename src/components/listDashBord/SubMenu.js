import { useState} from "react"
import { IoIosArrowDown, IoIosArrowForward} from "react-icons/io"

import data from './menu-data'
import './SubMenu.css'
export default function SubMenu(){
    const [newData, setData] = useState(data.menus)
    const [toggle, setToggle] = useState(true)

    
    function handelshow(){
   
      setToggle(prev=>!prev)
   

    }

    return(
        <>
       
        <div className="menu-list-child">
            {
              newData.map((item, id) =>{
                return (
                  <>
                  <div className="list-bo" key={id} onClick={handelshow}>
                    {toggle ? <IoIosArrowForward className="arrow"/>  : <IoIosArrowDown className="arrow"/>}
                    <p>{item.name}</p>
                    <p className="num">15</p>
                  </div>
                  {item.subMenus.map((info, id)=>{
                    return (
                       <div key={id} className={toggle ? "sub-tarifas-hide" : "sub-tarifas"}>
                      <p>{info.name}</p>
                      </div>
                    )
                  })}
                  </>
                )
              })
            }
 
         </div> 
        </>
    )
}