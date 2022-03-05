import { MdFilterAlt } from 'react-icons/md'
import Message from "../../message/Message"
import {useState} from 'react'


export default function Search({darkmode}){
  const [q, setQ] = useState("")

  

    return(
      <>
        <div className='search-container'>
          <div className="top-search">
          <input type="text" placeholder='pesquisar' className="search" value={q}
          onChange={(e)=> setQ(e.target.value)}/>
          <div className="search-btn">
            <input type="checkbox" />
            <button className='search-button'>ATRIBURE</button>
            <button className='search-button'>ARQUIVAR</button>
            <button className='search-button'>AGENDAR</button>
            <MdFilterAlt className="filter-logo" />
          </div>
          
          </div>
          <Message data = {q} darkmode={darkmode}/>
        </div>
          </>
   
    )
}