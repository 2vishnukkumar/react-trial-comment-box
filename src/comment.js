import React from 'react'



const Comment=props =>{
  
     

    return (
    

          
     <div className="ui container comments">
     <div className="comment">
     <a href='/' className="avatar">
     <img src={props.src} alt='Not Found' />
     </a>
     <div className="content">
     <a href='/' className='author'>
     {props.author}
     </a>
     <div className="metadata">
     <span className="date" >
     {props.date}
     </span>
     </div>
     <div className="text"> 
     {props.Comment}
     </div>
     </div>
     </div>
     </div>


    )
  }

export default Comment;

