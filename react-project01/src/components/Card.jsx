import React from 'react'
import {Bookmark} from 'lucide-react'
import {CircleArrowRight} from 'lucide-react'
const Card = (props) => {
  console.log(props);
  
  return (
  
      <div className="card">
        <div><div className="top">
      <img src={props.logo} alt="logo" />
      <button>Save <Bookmark size={15} /></button>
    </div>
    <div className="centre">
      <h3>{props.company} <span>{props.date}</span></h3>
      <h2>{props.posted}</h2>
      <div className="tag">
        <h4>{props.t1}</h4>
        <h4>{props.t2}</h4>
      </div>
    </div>
    <div className="bottom">
      
        <div><h3>{props.ppr}$/hr</h3>
        <p>{props.loc}</p>
          </div>
        <button>Apply <CircleArrowRight size={15} /></button></div>

  
   </div></div>
    
  )
}

export default Card
