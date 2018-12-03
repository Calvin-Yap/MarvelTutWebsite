import React from 'react';
import { NavLink }  from "react-router-dom";

class Error extends React.Component{
  render(){
    document.body.style.background = "url('https://i.imgur.com/vexzYfs.jpg') no-repeat center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
        return (
      <div  className="whiteContainer">

     <h1 className="error">Error: Path Does Not Exist</h1>
     <NavLink to="/" alt ="button" className="button2 hover" >Return Home</NavLink>

     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
    </div>
    )
  }
}

export default Error;
