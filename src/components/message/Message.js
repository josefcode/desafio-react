import './message.css'
import { RiChat4Fill, RiSendPlane2Fill} from "react-icons/ri"
import messageData from './messageData'
import menuData from '../listDashBord/menu-data'
import Checkbox from './Checkbox'

export default function Message({data, darkmode}){
    
    return(
        <>
        {
            messageData.items.map(item=>{
            return(
            <div>
                   {item.subMenuItems.map(info=>{
                       return(
                              <div className={darkmode ? "message-container": "darkmode"}>
                                 <input type="checkbox" className='checkbox'/>
                               <p className="user">{info.owner}</p>
                               <div className='message-subcontainer'>
                                    <div className="header">
                                        <h3>{info.name}</h3>
                                        <span>hoje: 13:34</span>
                                    </div>
                                    <div className="message-body">
                                        <RiChat4Fill className="logo-message"/>
                                        <p>{info.subject}</p>
                                    </div>
                                        <div className='message-foot'>
                                        <RiSendPlane2Fill className="logo-message" />
                                        {menuData.menus.map(newmenu=>{
                                        
                                     
                                            return <p>{newmenu.name}</p>
                                           
                                        })}
                                         <div className="foot-list">
                                        {info.users.map(sub=>{
                                            return(
                                            
                                              <p className='user-list'>{sub}</p>
                                       

                                                 )
                                        })}
                                             </div>
                                    </div>

                               </div>
                           </div>
                       )
                   })}
               </div>
                )
            })
        }
   
</>
    )
}