import React from 'react';
import { NavLink }  from "react-router-dom";
class Navigation extends React.Component {
  render(){
    return (
      <div className="nav">
        <img  className="logo" src = "./logo.png" alt ="ryerson"></img>
        <NavLink to="/" className="normal" >Summary</NavLink>
        <NavLink to="/install" className="normal">Installation</NavLink>
        <NavLink to="/tutorial" className="normal">Tutorial</NavLink>
        <NavLink to="/goodPage" className="normal">Example Page</NavLink>
        <NavLink to="/conclusion" className="normal">Conclusion</NavLink>
        <NavLink to="/credits" className="normal">Credits</NavLink>
      </div>
    );
  }
}

export default Navigation;
